import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  constructor(private route: ActivatedRoute) {}

  title = '';

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('name');
    console.log(param); 
  }

}
