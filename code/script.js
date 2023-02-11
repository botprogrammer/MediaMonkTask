const data = [
  {
    id: 0,
    xLocation: 0,
    title: {
      text: "We are breaking our vow of silence",
      position: "left top",
    },
    text: { text: "In January 2011, after a decade of digital, we opened the doors to our temple.", position: "right" },
  },
  {
    id: 1,
    xLocation: 950,
    title: {
      text: "talent is given true skill is earned",
      position: "left center",
    },
    text: {
      text: "Step 1 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 2,
    xLocation: 1650,
    title: {
      text: "be flexible to change and sturdy in conviction",
      position: "left center",
    },
    text: {
      text: "Step 2 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 3,
    xLocation: 2700,
    title: {
      text: "use many skills yet work as one",
      position: "right center",
    },
    text: {
      text: "Step 3 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 4,
    xLocation: 3700,
    title: {
      text: "to master anything find interest in everything",
      position: "right center",
    },
    text: {
      text: "Step 4 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 5,
    xLocation: 4700,
    title: {
      text: "individuals flourish if culture and wisdom are shared",
      position: "right center",
    },
    text: {
      text: "Step 5 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 6,
    xLocation: 5750,
    title: {
      text: "train for perfection but aim for more",
      position: "left center",
    },
    text: {
      text: "Step 6 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 7,
    xLocation: 7200,
    title: {
      text: "take pride in work but do not seek praise",
      position: "left center",
    },
    text: {
      text: "Step 7 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 8,
    xLocation: 7200,
    title: {
      text: "temporary sacrifice brings lasting results",
      position: "left center",
    },
    text: {
      text: "Step 8 out of 8 on the path of digital enlightenment",
      position: "right",
    },
  },
  {
    id: 9,
    xLocation: 8200,
    title: {
      text: "",
      position: "left top",
    },
    text: { text: "", position: "right" },
  },
]

let currentId = 0
let image = document.getElementById("backgroundImage")
let initialAnimation = document.getElementsByClassName("initialAnimation")[0]
let main = document.getElementsByClassName("main")[0]
let leftArrow = document.getElementsByClassName("leftArrow")[0]
let rightArrow = document.getElementsByClassName("rightArrow")[0]
let navigationBar = document.getElementsByClassName("navigationBar")[0]
let text = document.getElementById("text")
let smallText = document.getElementById("smallText")

// Function to initialize first animation

const initializeInitialAnimation = () => {
  main.style.display = "none"
  let smoke = document.getElementById("smoke")
  let monk = document.getElementById("monk")
  let patience = document.getElementsByTagName("span")[0]

  patience.style.display = "none"

  smoke.animate(
    [
      { transform: "translate(-100px, -50%)" },
      { transform: "translate(-300px, -50%)" },
    ],
    {
      duration: 4000,
    }
  )

  monk.animate(
    [
      { transform: "translate(-50%, -60%)" },
      { transform: "translate(-50%, -50%)" },
      { transform: "translate(-50%, -60%)" },
    ],
    {
      iterations: Infinity,
      duration: 2000,
    }
  )

  setTimeout(() => {
    patience.style.display = "unset"
    patience.animate([{ opacity: "0" }, { opacity: "0.5" }, { opacity: "1" }], {
      duration: 1000,
    })
  }, 1000)

  setTimeout(() => {
    initialAnimation.animate(
      [{ opacity: "1" }, { opacity: "0.5" }, { opacity: "0" }],
      {
        duration: 1000,
      }
    )

    initialAnimation.style.display = "none"

    main.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 1500,
    })

    main.style.display = "block"
  }, 3500)
}

initializeInitialAnimation()

// Function to update selected node

const updateSelectedNode = (id) => {
  document.getElementById(currentId.toString()).style.background = "transparent"
  if (id || id === 0) {
    document.getElementById(id).style.background = "white"
    currentId = id
  }
}

// Function to fire animation

const fireAnimation = (currentId) => {
  setTimeout(() => {
    smallText.style.display = "block"
    text.style.display = "block"
  }, 200)

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
    smallText.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 300,
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
  smallText.style.display = "none"
  text.style.display = "none"
  displayTitleAndsmallText(id)
  updateSelectedNode(id)
  toggleArrows(id)
}

const getItem = (id) => {
  return data.find((item) => item.id === id)
}

const displayTitleAndsmallText = (id) => {
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
  smallText.innerHTML = data.text.text
  fireAnimation(id)
}

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
    smallText.style.display = "none"
    text.style.display = "none"
    toggleArrows(newId)
    updateSelectedNode(newId)
    displayTitleAndsmallText(newId)

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
