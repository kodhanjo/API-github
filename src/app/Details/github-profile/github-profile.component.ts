import { Component, OnInit } from '@angular/core';
import { GitSearchService } from 'src/app/Services/git-search.service';
import { of, fromEvent, Observable} from 'rxjs';
import { merge } from 'rxjs';
import { mapTo} from 'rxjs/operators';
import { User} from '../../Models/user.model';
import { Repository } from '../../Models/repository';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  online$: Observable<boolean>;
  status!: string;
  isConnected = true;
  details!: User;
  repos!: Repository[];
  loading = false;

  constructor(private gitSearchService: GitSearchService) { 
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
      );
    this.networkStatus();
  }
  public networkStatus(): void {
    this.online$.subscribe(value => {
      if (value) {
        this.isConnected = true;
        this.status = 'ONLINE';
      } else {
        this.isConnected = false;
        this.status = 'OFFLINE';
      }
    });
  }

  ngOnInit(): void {
    this.loading =  true;
    this.gitSearchService.getMyInfo().then(data => {
      this.details = data;
    });
    this.gitSearchService.getMyRepos().then(repos => {
      this.repos = repos;
      this.loading = false;
    });
  }

}
