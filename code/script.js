const data = [
  {
    id: 0,
    xLocation: 0,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 1,
    xLocation: 200,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 2,
    xLocation: 400,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 3,
    xLocation: 600,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 4,
    xLocation: 800,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 5,
    xLocation: 1000,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
];

let currentId = 0;
let image = document.getElementById("backgroundImage");
let leftArrow = document.getElementsByClassName("leftArrow")[0];
let rightArrow = document.getElementsByClassName("rightArrow")[0];

// Function to disable scroll without navigation

// const disableScroll = () => {
//   // Get the current page scroll position
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
//     // if any scroll is attempted,
//     // set this to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(scrollLeft, scrollTop);
//     });
// };

// Function to create new element for navigation

// const createNewCarouselNode =

// Function to get the location of a specific ID

const getLocation = (id) => {
  return data.find((item) => item.id === id).xLocation;
};

// Function to toggle the Navigation Arrows

const toggleArrows = () => {
  if (currentId <= 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }

  if (currentId >= Object.keys(data).length - 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }
};

toggleArrows();

// Function to make transition

const makeTransition = (transitionSide) => {
  if (transitionSide === "left") {
    if (currentId <= 0) return;
    currentId -= 1;
  }
  if (transitionSide === "right") {
    if (currentId >= Object.keys(data).length - 1) return;
    currentId += 1;
  }

  toggleArrows();

  const locationToMove = getLocation(currentId);

  image.style.transform = `translateX(-${locationToMove}px)`;
  image.style.transitionDuration = "1s";
  image.style.transitionTimingFunction = "ease";

  console.log({ transitionSide, currentId, locationToMove });
};
