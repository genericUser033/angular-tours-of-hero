import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe, Location} from "@angular/common";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-details',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        UpperCasePipe
    ],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero | undefined;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  getHeroFromId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroDetailsById(id).subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void {
    this.getHeroFromId();
  }

  goBack() {
    this.location.back();
  }
}
