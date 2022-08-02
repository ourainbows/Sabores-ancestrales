import { Injectable } from '@angular/core';
import { ApiError, createClient, Session, SupabaseClient, User, UserCredentials } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { USER_STORAGE_KEY } from '../../const/const';

type supabaseRes = User | Session | ApiError | null

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabaseClient: SupabaseClient;
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.supabaseClient = createClient(environment.supabase.api, environment.supabase.publicKey);
    this.setUser();
   }

   get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  async login(credentials: UserCredentials): Promise<supabaseRes> {
    try{
      const {user, error, ...rest} = await this.supabaseClient.auth.signIn(credentials);
      this.setUser();
      return error ? error : user;
    }catch(err: any){
      console.log(err);
      return err
    }
  }

  async register(credentials: UserCredentials): Promise<supabaseRes> {
    try {
      const { user, error, ...rest } = await this.supabaseClient.auth.signUp(credentials);
      this.setUser();
      return error ? error : user;
    } catch (err: any) {
      console.log(err);
      return err
    }
  }

  logout(): Promise<{ error: ApiError | null }> {
    this.userSubject.next(null);
    return this.supabaseClient.auth.signOut();
  }

  private setUser(): void{
    const session = localStorage.getItem(USER_STORAGE_KEY) as unknown as User;
    this.userSubject.next(session);
  }
}
