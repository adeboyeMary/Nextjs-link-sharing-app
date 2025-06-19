
// const platforms: Platform[] = [
//   {icon: "/assets/git.svg", name: "Github"},
//   {icon: "/assets/frontMentor.svg", name: "Frontend Mentor"},
//   {icon: "/assets/X.svg", name: "X"},
//   {icon: "/assets/linkedIn.svg", name: "LinkedIn"},
//   {icon: "/assets/youtube.svg", name: "YouTube"},
//   {icon: "/assets/fb.svg", name: "Facebook"},
//   {icon: "/assets/twitch.svg", name: "Twitch"},
//   {icon: "/assets/devto.svg", name: "Dev.to"},
//   {icon: "/assets/codewars.svg", name: "Codewars"},
//   {icon: "/assets/codepen.svg", name: "Codepen"},
//   {icon: "/assets/fcc.svg", name: "freeCodeCamp"},
//   {icon: "/assets/gitlab.svg", name: "GitLab"},
//   {icon: "/assets/hashnode.svg", name: "Hashnode"},
//   {icon: "/assets/stackOverflow.svg", name: "Stack Overflow"},
// ];


// const AddLinkForm = (links) => {
//   // const [links, setLinks] = useState<FormObject[]>([]);

//   // const formOnChangeHandler = (index: number, field: keyof FormObject, value: string ) => {
//   //   setLinks((prevLinks) => {
//   //     const updatedLinks = [...prevLinks];
//   //     updatedLinks[index] = { ...updatedLinks[index], [field]: value};
//   //     return updatedLinks;
//   //   });
//   // };

//   // const handleAddLink = () => {
//   //   setLinks((prevLinks) => [
//   //     ...prevLinks, 
//   //     {
//   //       platform: {icon: "", name: ""},
//   //       url: ""
//   //     }
//   //   ]);
//   // };
  

//   return (
//     {links.map((index, link) => (
//       <div key={index}>
//         <div className="flex justify-between ">
//           <div className="flex flex-row gap-1 font-bold ">
//             <Image src={linkLines} alt="logo"  />
//             <span>Link #{index + 1}</span>
//           </div>
//         </div>
//       </div>
//     ))}
//     // <div className="bg-[#FAFAFA] rounded-lg p-4 mt-6 text-[#737373] ">
//     //   <div className="flex justify-between ">
//     //     <div className="flex flex-row gap-1 font-bold ">
//     //       <Image src={linkLines} alt="logo"  />
//     //       <span>Link #1</span>
//     //     </div>
//     //     <span>Remove</span>
//     //   </div>
//     //   <div>
        
//     //   </div>
//     // </div>
//   )
// };

// export default AddLinkForm;