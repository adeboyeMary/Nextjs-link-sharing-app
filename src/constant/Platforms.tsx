import { Platform } from "@/store/types";
import { Github, Twitter, LinkedIn, FrontMent, FaceBook, TwitchIcon, DevtoIcon, Codewars, Codepen, FreeCodeCamp, 
  GitlabIcon, HashnodeIcon, StackOverflow } from "@/components/icons";
import YouTube from "@/components/icons/Youtube";

export const platforms: Platform[] = [
    {id:'a1', icon: Github, name: "Github", bg: "#000000"},
    {id:'a2', icon: FrontMent, name: "Frontend Mentor", bg: "#E4BFD1"},
    {id:'a3', icon: Twitter, name: "Twitter", bg: "#43B7E9"},
    {id:'a4', icon: LinkedIn, name: "LinkedIn", bg: "#2D68FF"},
    {id:'a5', icon: YouTube, name: "YouTube", bg: "#EE3939"},
    {id:'a6', icon: FaceBook, name: "Facebook", bg: "#2442AC"},
    {id:'a7', icon: TwitchIcon, name: "Twitch", bg: "#EE3FC8"},
    {id:'a8', icon: DevtoIcon, name: "Dev.to", bg: "#000000"},
    {id:'a9', icon: Codewars, name: "Codewars", bg: "#8A1A50"},
    {id:'a10', icon: Codepen, name: "Codepen", bg: "#644654"},
    {id:'a11', icon: FreeCodeCamp, name: "freeCodeCamp", bg: "#302267"},
    {id:'a12', icon: GitlabIcon, name: "GitLab", bg: "#EB4925"},
    {id:'a13', icon: HashnodeIcon, name: "Hashnode", bg: "#0330D1"},
    {id:'a14', icon: StackOverflow, name: "Stack Overflow", bg: "#EC7100"},
  ];