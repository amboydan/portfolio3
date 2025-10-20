import { Injectable } from "@angular/core";
//import { ARIYA_MOHEB } from "@main/shared/personal-info/ARIYA_MOHEB";
import { DANIEL_TAYLOR } from "@main/shared/personal-info/DANIEL_TAYLOR";

@Injectable({
  providedIn: "root",
})
export class PersonalInfoService {
  getMainInfo() {
    return DANIEL_TAYLOR.main;
  }

  getSkills() {
    return DANIEL_TAYLOR.skills;
  }

  getProjects() {
    return DANIEL_TAYLOR.projects;
  }

  getExperiences() {
    return DANIEL_TAYLOR.experiences;
  }

  getContacts() {
    return DANIEL_TAYLOR.contacts;
  }
}
