import { BookmarkGroup } from "@startpage/bookmarks"
import { SearchEngineName } from "@startpage/search"

export const defaultSettings = {
  img: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_p320aq1osj1vjxiz1o1_1280.gif?iv=344",
  title: "Yet another generic startpage",
  searchPlaceholder: "Search the web",
  searchEngine: "google" as SearchEngineName,
}

export const initialBookmarks: BookmarkGroup[] = [
  {
    label: "Reddit",
    bookmarks: [
      {
        label: "r/startpages",
        url: "https://www.reddit.com/r/startpages/",
      },
      {
        label: "r/unixporn",
        url: "https://www.reddit.com/r/unixporn/",
      },
      {
        label: "r/rainmeter",
        url: "https://www.reddit.com/r/rainmeter/",
      },
      {
        label: "r/AnimalsBeingDerps",
        url: "https://www.reddit.com/r/AnimalsBeingDerps/",
      },
    ],
  },
  {
    label: "Design",
    bookmarks: [
      {
        label: "PixlrX",
        url: "https://pixlr.com/x/",
      },
      {
        label: "AI Image Enlarger",
        url: "https://bigjpg.com/en",
      },
      {
        label: "Img to Svg Converter",
        url: "https://picsvg.com/",
      },
    ],
  },
  {
    label: "Music",
    bookmarks: [
      {
        label: "i wanna be a cowboy",
        url: "https://www.youtube.com/watch?v=8zWz92f_HGs",
      },
      {
        label: "let the bodies hit the floor",
        url: "https://www.youtube.com/watch?v=b--VKaCB9u0",
      },
      {
        label: "Nobody Kanna Cross It",
        url: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
      },
      {
        label: "Smug Dancin",
        url: "https://www.youtube.com/watch?v=eNZ9Od1jQ4Q",
      },
    ],
  },
  {
    label: "Sauce",
    bookmarks: [
      {
        label: "Gif",
        url: "https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/",
      },
      {
        label: "@startpage",
        url: "https://prettycoffee.github.io/startpage",
      },
    ],
  },
]
