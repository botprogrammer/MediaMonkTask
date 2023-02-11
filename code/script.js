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
    xLocation: 900,
    title: {
      text: "we are breaking our vow of silence 1",
      position: "right top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 2,
    xLocation: 1800,
    title: {
      text: "we are breaking our vow of silence 2",
      position: "left center",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 3,
    xLocation: 2700,
    title: {
      text: "we are breaking our vow of silence 3",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 4,
    xLocation: 3600,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 5,
    xLocation: 4500,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 6,
    xLocation: 5400,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 7,
    xLocation: 6300,
    title: {
      text: "we are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "dummy text one", position: "right" },
  },
  {
    id: 8,
    xLocation: 7200,
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
let text = document.getElementById("text")
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
  console.log({ id })
  document.getElementById(currentId.toString()).style.background = "transparent"
  if (id || id === 0) {
    document.getElementById(id).style.background = "white"
    currentId = id
  }
}

// Function to fire animation

const fireAnimation = (currentId) => {
  if (currentId === 0) {
    text.animate(
      [
        { transform: "translateY(15px)", opacity: "0" },
        { transform: "translateY(0px)", opacity: "1" },
      ],
      { duration: 300, delay: 200 }
    )
  } else {
    text.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 1000,
      delay: 200,
    })
  }
  text.style.opacity = "unset"
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
      // element.style.border = "5px solid transparent"
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

  displayTitle(id)
  updateSelectedNode(id)
  toggleArrows(id)
}

const getItem = (id) => {
  return data.find((item) => item.id === id)
}

const displayTitle = (id) => {
  const data = getItem(id)
  const hr = data.title.position.split(" ")[0]
  const vr = data.title.position.split(" ")[1]

  const title = data.title.text
  text.innerHTML = title
  text.style.left = hr === "left" ? "0" : "unset"
  text.style.right = hr === "right" ? "0" : "unset"
  text.style.top = vr === "center" ? "40%" : "0"
  text.style.textAlign = hr
  text.style.opacity = "0"

  fireAnimation(id)
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
    updateSelectedNode(newId)
    displayTitle(newId)

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
shiftToNewLocation(0)
