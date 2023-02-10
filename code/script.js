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
  {
    id: 6,
    xLocation: 1000,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 7,
    xLocation: 1000,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 8,
    xLocation: 1000,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 9,
    xLocation: 8000,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
]

let currentId = 0
let image = document.getElementById("backgroundImage")
let leftArrow = document.getElementsByClassName("leftArrow")[0]
let rightArrow = document.getElementsByClassName("rightArrow")[0]
let navigationBar = document.getElementsByClassName("navigationBar")[0]

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

// Function to update selected node

const updateSelectedNode = (id) => {
  document.getElementById(currentId.toString()).style.background = "transparent"
  if (id) {
    document.getElementById(id).style.background = "white"
    currentId = id
  }
}

// Function to create new element for navigation

const createNewCarouselNode = () => {
  for (let i = 0; i < data.length; i++) {
    let element = document.createElement("div")
    let attribute = document.createAttribute("onClick")
    attribute.value = `shiftToNewLocation(${i})`

    element.setAttributeNode(attribute)

    element.id = data[i].id
    element.style.width = "1.5rem"
    element.style.height = "1.5rem"

    // element.style.background = "red"
    if (i !== 0) {
      element.innerText = i !== data.length - 1 ? i : null
      element.style.borderLeft = "3px solid white"
      element.style.borderLeftStyle = "dotted"
      element.style.color = "white"
    }
    navigationBar.appendChild(element)
  }
}

const shiftToNewLocation = (id) => {
  const locationToMove = getLocation(id)

  image.style.transform = `translateX(-${locationToMove}px)`
  image.style.transitionDuration = "1s"
  image.style.transitionTimingFunction = "ease"

  updateSelectedNode(id)
  toggleArrows(id)
}

// Function to update active carousel node

// const updateActiveCarouselNode = () => {
//   let element = document.getElementById(currentId.toString())
//   element.style.background = "white"
// }

// Function to get the location of a specific ID

const getLocation = (id) => {
  return data.find((item) => item.id === id).xLocation
}

// Function to toggle the Navigation Arrows

const toggleArrows = (id = 0) => {
  if (id <= 0) {
    leftArrow.style.display = "none"
  } else {
    leftArrow.style.display = "block"
  }

  if (id >= Object.keys(data).length - 1) {
    rightArrow.style.display = "none"
  } else {
    rightArrow.style.display = "block"
  }
}

// Function to make transition

const makeTransition = (transitionSide) => {
  if (transitionSide) {
    let newId = currentId

    if (transitionSide === "left") {
      if (currentId <= 0) return
      newId -= 1
    }

    if (transitionSide === "right") {
      if (currentId >= Object.keys(data).length - 1) return
      newId += 1
    }

    const locationToMove = getLocation(newId)

    toggleArrows(newId)
    // createNewCarouselNode()
    updateSelectedNode(newId)

    image.style.transform = `translateX(-${locationToMove}px)`
    image.style.transitionDuration = "1s"
    image.style.transitionTimingFunction = "ease"

    currentId = newId
  } else {
    shiftToNewLocation()
  }
}

toggleArrows()
createNewCarouselNode()
updateSelectedNode()
