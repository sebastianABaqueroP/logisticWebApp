import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShipmentService {
  constructor(private http: HttpClient) {}

  /**
   * Gets shipments
   * @param url
   * @description
   * @author {sebastian baquero} software developer
   */
  getShipments(url) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Credentials", "false");
    headers.set("Access-Control-Allow-Methods", "GET");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const params = new HttpParams();
    this.http.get(url, { headers, params }).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body", val);
      },
      (response) => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      }
    );
  }

  /**
   * Adds shipment
   * @param url
   * @description
   * @author {sebastian baquero} software developer
   */
  addShipment(url) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const params = new HttpParams()
      .set("orderBy", '"$key"')
      .set("limitToFirst", "1");
    const options = {
      headers: headers,
      params: params,
    };
    this.http
      .post(
        url,
        {
          courseListIcon: "...",
          description: "TEST",
          iconUrl: "..",
          longDescription: "...",
          url: "new-url",
        },
        options
      )
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
        },
        (response) => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }

  /**
   * Updates shipment
   * @param url
   * @param body
   * @param id
   * @description
   * @author {sebastian baquero} software developer
   */
  updateShipment(url, body, id) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const params = new HttpParams().set("id", id);
    const options = {
      headers: headers,
      params: params,
    };
    this.http
      .put(
        url,
        {
          courseListIcon: ".../main-page-logo-small-hat.png",
          description: "Angular Tutorial For Beginners TEST",
          iconUrl: ".../angular2-for-beginners.jpg",
          longDescription: "...",
          url: "new-value-for-url",
        },
        options
      )
      .subscribe(
        (val) => {
          console.log("PUT call successful value returned in body", val);
        },
        (response) => {
          console.log("PUT call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }

  /**
   * Deletes shipment
   * @param url
   * @param id
   * @description
   * @author {sebastian baquero} software developer
   */
  deleteShipment(url, id) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const params = new HttpParams().set("id", id);
    const options = {
      headers: headers,
      params: params,
    };
    this.http.delete(url, options).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body", val);
      },
      (response) => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      }
    );
  }
}
