export type Platform = {
    // icon: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    name: string
  }

  export type FormObject = {
    platform: Platform | null,
    url: string
  }

  export type ProfileDetails = {
    enteredFirstName: string,
    enteredLastName: string,
    enteredEmail: string
  }