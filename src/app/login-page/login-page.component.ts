import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { login } from '../store/auth/auth.actions';
import { Observable, Observer } from 'rxjs';
import { getAuthError, getAuthLoading } from '../store/auth/auth.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup = this.fb.group({
    login: '',
    password: '',
  });

  loading$: Observable<boolean>;
  error$: Observable<string | undefined>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.loading$ = this.store.select(getAuthLoading);
    this.error$ = this.store.select(getAuthError);
  }

  ngOnInit(): void {}

  submit() {
    const props = {
      login: this.form.value.login,
      password: this.form.value.password,
    };
    console.log('props', props);
    this.store.dispatch(login(props));
  }
}
