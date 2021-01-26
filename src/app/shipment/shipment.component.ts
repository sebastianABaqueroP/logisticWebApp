import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Country } from "@angular-material-extensions/select-country";

export  interface DataShipmentModel {
  portFrom: string,
  portTo: string,
  merchandaise: string,
  price: number,
  containerType: string,
}

@Component({
  selector: "app-shipment",
  templateUrl: "./shipment.component.html",
  styleUrls: ["./shipment.component.scss"],
})
export class ShipmentComponent implements OnInit {
  title = "select-county";

  dataShipment: DataShipmentModel [] = [{
    portTo: '',
    portFrom: '',
    merchandaise: '',
    price: null,
    containerType: ''
  }];

  shipmentForm = new FormGroup({
    portFrom: new FormControl(this.dataShipment[0].portFrom, Validators.required),
    portTo: new FormControl(this.dataShipment[0].portTo, Validators.required),
    merchandaise: new  FormControl(this.dataShipment[0].merchandaise, Validators.required),
    price: new FormControl(this.dataShipment[0].price, Validators.required),
    containerType: new  FormControl(this.dataShipment[0].containerType, Validators.required),
  })

  containersType = [
    { name: "generalPurpose", value: "General Purpose" },
    { name: "flatRack", value: "Flat Rack" },
    { name: "openTop", value: "Open Top" },
    { name: "doubleDoor", value: "Double Door" },
    { name: "highCube", value: "High Cube" },
    { name: "openSide", value: "Open Side" },
    { name: "isoReefer", value: "Iso Reefer" },
    { name: "insulated", value: "Insulated" },
    { name: "halfHeight", value: "Half-HeightI" },
    { name: "tank", value: "Tank" },
    { name: "swapBody", value: "Swap Body" },
  ];

  merchandaiseType = [
    { name: "stapled", value: "Stapled" },
    { name: "assortment", value: "Assorment" },
    { name: "seasonal", value: "Seasonal" },
    { name: "fad", value: "Fad" },
  ];



  port: string;
  merchandaiseValue: string;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  
  }

  onSubmit() {
    console.log('data: ', this.shipmentForm.value);
  }
}
