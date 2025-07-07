import { Platform } from "@/store/types";
import { Github, Twitter, LinkedIn, FrontMent, FaceBook, TwitchIcon, DevtoIcon, Codewars, Codepen, FreeCodeCamp, 
  GitlabIcon, HashnodeIcon, StackOverflow } from "@/components/icons";
import YouTube from "@/components/icons/Youtube";

export const platforms: Platform[] = [
    {icon: Github, name: "Github"},
    {icon: FrontMent, name: "Frontend Mentor"},
    {icon: Twitter, name: "Twitter"},
    {icon: LinkedIn, name: "LinkedIn"},
    {icon: YouTube, name: "YouTube"},
    {icon: FaceBook, name: "Facebook"},
    {icon: TwitchIcon, name: "Twitch"},
    {icon: DevtoIcon, name: "Dev.to"},
    {icon: Codewars, name: "Codewars"},
    {icon: Codepen, name: "Codepen"},
    {icon: FreeCodeCamp, name: "freeCodeCamp"},
    {icon: GitlabIcon, name: "GitLab"},
    {icon: HashnodeIcon, name: "Hashnode"},
    {icon: StackOverflow, name: "Stack Overflow"},
  ];