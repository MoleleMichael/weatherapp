import { Component, OnInit } from '@angular/core';
import { WeatherfeedService } from "../weatherfeed.service"
import { FormGroup, FormBuilder, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  forecast: any = [];
  validations_form: FormGroup;
  constructor(private weatherService: WeatherfeedService,  private formBuilder: FormBuilder) { 
    this.validations_form = this.formBuilder.group({
      city: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.loadWeather(this.validations_form.value.city);
  }

  ngOnInit() {
    
  }

  loadWeather(city) {
    this.weatherService.getWeather("weather?q=midrand").subscribe(weather => {
      this.forecast = JSON.parse(JSON.stringify(weather)) ;
      console.log(this.forecast);
    })
    // this.weatherService.getWeather(this.validations_form.value.city).subscribe( weather => {
    //   this.forecast = weather;
    //   console.log(this.forecast);
  }
}


