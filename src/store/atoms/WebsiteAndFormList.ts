import {atom} from "recoil";

const websiteAndFormListAtom = atom({
    key: "websiteAndFormListAtom",
    default: [
        {
          name: "TeleS3",
          forms: [
            {
              name: "Enquiry",
            },
            {
              name: "Contact",
            },
          ],
        },
        {
          name: "IDOLCS",
        },
        {
          name: "Dharma 4 Dharma",
        },
        {
          name: "Ashreya Gurukul",
        },
        {
          name: "Shreyas' Living Room",
        },
      ]
});

export default websiteAndFormListAtom;