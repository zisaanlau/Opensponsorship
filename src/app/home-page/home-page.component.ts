import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import axios from "axios";

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

export interface PeriodicElement {
  position: number;
  name: string;
  gender: string;
  birth: string;
  nationality: string;
  association: string;
  team: string;
}

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  isShowForm = false;
  isLoaded = false;
  isButtonVisible = true;
  isEditing = false;
  allData;
  editData = null;
  dataSource: PeriodicElement[] = [];
  displayedColumns: string[] = [
    "position",
    "name",
    "gender",
    "birth",
    "association",
    "nationality",
    "team"
  ];
  constructor() {}
  activedStep = 0;
  showForm = false;
  model = {};
  steps: StepType[] = [
    {
      label: "Basic Info",
      fields: [
        {
          key: "name",
          type: "input",
          // defaultValue: this.model,
          templateOptions: {
            label: "Name",
            required: true
          }
        },
        {
          key: "gender",
          type: "select",
          templateOptions: {
            required: true,
            // multiple: true,
            label: "Gender",
            labelProp: "name",
            options: [
              {
                name: "Male",
                value: "male"
              },
              {
                name: "Female",
                value: "female"
              }
            ]
          }
        },
        {
          key: "birth",
          type: "input",
          templateOptions: {
            type: "date",
            label: "Date of Birth",
            required: true
          }
        },
        {
          key: "nationality",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            type: "text",
            label: "Nationality"
          }
        },

        {
          key: "location",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            type: "text",
            label: "Location"
          }
        },
        {
          key: "marital",
          type: "select",
          defaultValue: "N/A",
          templateOptions: {
            label: "Marital status",

            labelProp: "name",
            options: [
              {
                name: "Single",
                value: "single"
              },
              {
                name: "Married",
                value: "married"
              }
            ]
          }
        }
      ]
    },
    {
      label: "Personal",
      fields: [
        {
          key: "interest",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            label: "Interest",
            type: "text"
          }
        },
        {
          key: "alcohol",
          type: "select",
          defaultValue: "N/A",
          templateOptions: {
            label: "Alcohol?",

            labelProp: "name",
            options: [
              {
                name: "Yes",
                value: "yes"
              },
              {
                name: "No",
                value: "no"
              }
            ]
          }
        },
        {
          key: "pets",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            label: "Pet(s)"
          }
        },
        {
          key: "charities",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            label: "Charities"
          }
        }
      ]
    },
    {
      label: "Sports",
      fields: [
        {
          key: "team",
          type: "input",
          templateOptions: {
            type: "text",
            label: "Team",
            required: true
          }
        },
        {
          key: "association",
          type: "input",
          templateOptions: {
            type: "input",
            label: "Association",
            required: true
          }
        },
        {
          key: "sports",
          type: "select",
          defaultValue: "N/A",
          templateOptions: {
            label: "Sports",
            multiple: true,
            labelProp: "name",
            options: [
              {
                name: "Golf",
                value: "golf"
              },
              {
                name: "Tennis",
                value: "tennis"
              },
              {
                name: "Cricket",
                value: "cricket"
              },
              {
                name: "Basketball",
                value: "basketball"
              },
              {
                name: "Baseball",
                value: "baseball"
              },
              {
                name: "Aquatics",
                value: "aquatics"
              },
              {
                name: "American Football",
                value: "american football"
              },
              {
                name: "Archery",
                value: "archery"
              },
              {
                name: "Automobile Racing",
                value: "automobile racing"
              },
              {
                name: "Badminton",
                value: "badminton"
              },
              {
                name: "Beach Volleyball",
                value: "beach volleyball"
              },
              {
                name: "Bobsleigh",
                value: "bobsleigh"
              },
              {
                name: "Body Building",
                value: "body building"
              },
              {
                name: "Boxing",
                value: "boxing"
              },
              {
                name: "Cross Country Running",
                value: "cross country running"
              },
              {
                name: "Cross Country Skiing",
                value: "cross country skiing"
              },
              {
                name: "Curling",
                value: "curling"
              },
              {
                name: "Cycling",
                value: "cycling"
              },
              {
                name: "Darts",
                value: "darts"
              },
              {
                name: "Decathlon",
                value: "decathlon"
              },
              {
                name: "Down Hill Skiing",
                value: "down hill skiing"
              },
              {
                name: "Equestrianism",
                value: "equestrianism"
              },
              {
                name: "eSports",
                value: "esports"
              },
              {
                name: "Fencing",
                value: "fencing"
              },
              {
                name: "Field Hockey",
                value: "field hockey"
              },
              {
                name: "Figure Skating",
                value: "figure skating"
              },
              {
                name: "Gymnastics",
                value: "gymnastics"
              },
              {
                name: "Ice Hockey",
                value: "ice hockey"
              },
              {
                name: "Martial Arts",
                value: "martial arts"
              },
              {
                name: "Mixed Martial Arts",
                value: "mixed martial arts"
              },
              {
                name: "Netball",
                value: "netball"
              },
              {
                name: "Polo",
                value: "polo"
              },
              {
                name: "Racquetball",
                value: "racquetball"
              },
              {
                name: "Rowing",
                value: "rowing"
              },
              {
                name: "Rugby",
                value: "rugby"
              },
              {
                name: "Sailing",
                value: "sailing"
              },
              {
                name: "Softball",
                value: "softball"
              },
              {
                name: "Shooting",
                value: "shooting"
              },
              {
                name: "Skateboarding",
                value: "skateboarding"
              },
              {
                name: "Skeet Shooting",
                value: "skeet shooting"
              },
              {
                name: "Skeleton",
                value: "skeleton"
              },
              {
                name: "Soccer",
                value: "soccer"
              },
              {
                name: "Squash",
                value: "squash"
              },
              {
                name: "Surfing",
                value: "surfing"
              },
              {
                name: "Swimming",
                value: "swimming"
              },
              {
                name: "Track and Field",
                value: "track and field"
              }
            ]
          }
        }
      ]
    },
    {
      label: "About",
      fields: [
        {
          key: "desc",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            type: "text",
            label: "Description"
          }
        },
        {
          key: "profile",
          type: "input",
          templateOptions: {
            type: "file",
            label: "Profile",
            required: true
          }
        },
        {
          key: "media",
          type: "input",
          defaultValue: "N/A",
          templateOptions: {
            label: "Social Media"
          }
        }
      ]
    }
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions>{});

  ngOnInit() {
    this.dataSource = [];
    axios
      .get("https://opensponsorship-liuz6.herokuapp.com/api")
      .then(response => {
        this.allData = response.data;
        return response.data.map((person, index) => {
          this.dataSource.push({
            position: index + 1,
            name: person.name,
            gender: person.gender,
            birth: person.birth,
            nationality: person.nationality,
            association: person.association,
            team: person.team
          });
        });
      })
      .then(() => {
        this.isLoaded = !this.isLoaded;
      })
      .catch(error => {
        console.log(error);
      });
  }

  prevStep = step => {
    this.activedStep = step - 1;
  };

  nextStep = step => {
    this.activedStep = step + 1;
  };

  changeVis = () => {
    // alert(this.open);
    this.isShowForm = !this.isShowForm;
    this.isButtonVisible = !this.isButtonVisible;
  };

  submit = () => {
    if (this.isEditing) {
      axios
        .put("https://opensponsorship-liuz6.herokuapp.com/api", this.model)
        .then(response => {
          alert("Edit succeeded!");
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .post("https://opensponsorship-liuz6.herokuapp.com/api", this.model)
        .then(response => {
          alert("Upload succeeded!");
          // this.isButtonVisible = !this.isButtonVisible;
          // this.isShowForm = !this.isShowForm;
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  getRecord = row => {
    // this.editData = this.allData[row.position - 1];
    this.model = this.allData[row.position - 1];
    this.isShowForm = !this.isShowForm;
    this.isButtonVisible = !this.isButtonVisible;
    this.isEditing = !this.isEditing;
    console.info(this.model);
  };
}
