import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
// import { Country } from "@angular-material-extensions/select-country";

export interface DataShipmentModel {
  portFrom: string;
  portTo: string;
  merchandise: string;
  price: number;
  containerType: string;
  issurance: string;
}

@Component({
  selector: "app-shipment",
  templateUrl: "./shipment.component.html",
  styleUrls: ["./shipment.component.scss"],
})
export class ShipmentComponent implements OnInit {
  title = "select-county";

  showDetails: boolean = false;
  panelOpenState: boolean = false;

  dataShipment: DataShipmentModel[] = [
    {
      portTo: "",
      portFrom: "",
      merchandise: "",
      price: null,
      containerType: "",
      issurance: "",
    },
  ];

  shipmentForm = new FormGroup({
    portFrom: new FormControl(
      this.dataShipment[0].portFrom,
      Validators.required
    ),
    portTo: new FormControl(this.dataShipment[0].portTo, Validators.required),
    merchandise: new FormControl(
      this.dataShipment[0].merchandise,
      Validators.required
    ),
    price: new FormControl(this.dataShipment[0].price, Validators.required),
    containerType: new FormControl(
      this.dataShipment[0].containerType,
      Validators.required
    ),
    issurance: new FormControl(
      this.dataShipment[0].issurance,
      Validators.required
    ),
  });

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
  issuranceType = [
    { name: "Yes", value: "Yes" },
    { name: "No", value: "No" },
  ];

  merchandiseType = [
    { name: "stapled", value: "Stapled" },
    { name: "assortment", value: "Assorment" },
    { name: "seasonal", value: "Seasonal" },
    { name: "fad", value: "Fad" },
  ];

  optionsShipment = [
    { id: 1, name: "opcion1", data: [{ cost: 300 }] },
    { id: 2, name: "opcion2", data: [{ cost: 400 }] },
    { id: 3, name: "opcion3", data: [{ cost: 500 }] },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log("data: ", this.shipmentForm.value);
    if (this.shipmentForm.value) {
      this.showDetails = !this.showDetails;
    }
  }
}
