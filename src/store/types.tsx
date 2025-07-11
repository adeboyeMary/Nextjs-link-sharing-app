export type Platform = {
    // icon: string,
    id: string,
    bg: string,
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

  // export type FormDataType = {
  //   name: string;
  //   url: string;
  // };