import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProviderComponent } from "./provider/provider.component";
import { ShipmentComponent } from "./shipment/shipment.component";

const routes: Routes = [
  {
    path: "shipments",
    component: ShipmentComponent,
  },
  {
    path: "providers",
    component: ProviderComponent,
  },
  {
    path: "**",
    redirectTo: "shipments",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
