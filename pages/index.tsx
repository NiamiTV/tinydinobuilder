/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component, useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import mergeImages from 'merge-images';
import { saveAs } from 'file-saver';
import Link from 'next/link'

//#region 
const availableBackgrounds = [
  {
    value: 'none',
    label: 'None'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/blue conical gradient.png',
    label: 'blue conical gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/blue linear gradient.png',
    label: 'blue linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/blue.png',
    label: 'blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/day landscape.png',
    label: 'day landscape'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/gray.png',
    label: 'gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/green conical gradient.png',
    label: 'green conical gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/green.png',
    label: 'green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/light brown.png',
    label: 'light brown'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/light gray.png',
    label: 'light gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/night landscape.png',
    label: 'night landscape'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/orange conical gradient.png',
    label: 'orange conical gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/orange.png',
    label: 'orange'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/pink linear gradient.png',
    label: 'pink linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/pink.png',
    label: 'pink'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/purple conical gradient.png',
    label: 'purple conical gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/purple linear gradient.png',
    label: 'purple linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/purple.png',
    label: 'purple'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/red conical gradient.png',
    label: 'red conical gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/red linear gradient.png',
    label: 'red linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/snow landscape.png',
    label: 'snow landscape'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/yellow linear gradient.png',
    label: 'yellow linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/background/yellow.png',
    label: 'yellow'
  }
]

const availableBodies = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/aqua.png',
    label: 'aqua'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/blue linear gradient.png',
    label: 'blue linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/blue.png',
    label: 'blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/gray.png',
    label: 'gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/grayspace linear gradient.png',
    label: 'grayspace linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/green linear gradient.png',
    label: 'green linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/green.png',
    label: 'green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/light green.png',
    label: 'light green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/lime green.png',
    label: 'lime green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/orange linear gradient.png',
    label: 'orange linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/pink linear gradient.png',
    label: 'pink linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/pink.png',
    label: 'pink'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/purple linear gradient.png',
    label: 'purple linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/purple.png',
    label: 'purple'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/rainbow.png',
    label: 'rainbow'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/red.png',
    label: 'red'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/teal.png',
    label: 'teal'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/yellow linear gradient.png',
    label: 'yellow linear gradient'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/body/yellow.png',
    label: 'yellow'
  }
]

const availableChests = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/aqua.png',
    label: 'aqua'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/blue.png',
    label: 'blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/gray.png',
    label: 'gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/green.png',
    label: 'green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/light blue.png',
    label: 'light blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/light gray.png',
    label: 'light gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/orange.png',
    label: 'orange'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/orangered.png',
    label: 'orangered'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/pink.png',
    label: 'pink'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/purple.png',
    label: 'purple'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/chest/yellow.png',
    label: 'yellow'
  }
]

const availableEyes = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/blue yellow.png',
    label: 'blue yellow'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/blue.png',
    label: 'blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/dark gray.png',
    label: 'dark gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/dark red.png',
    label: 'dark red'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/green red.png',
    label: 'green red'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/green.png',
    label: 'green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/lazer.png',
    label: 'lazer'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/light gray.png',
    label: 'light gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/orange.png',
    label: 'orange'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/purple.png',
    label: 'purple'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/red.png',
    label: 'red'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/white.png',
    label: 'white'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/eyes/yellow.png',
    label: 'yellow'
  }
]

const availableFaces = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/normal.png',
    label: 'Normal'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/bandages.png',
    label: 'bandages'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/mask.png',
    label: 'mask'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/ninja.png',
    label: 'ninja'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/noun glasses.png',
    label: 'noun glasses'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/skull.png',
    label: 'skull'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/face/vizor.png',
    label: 'vizor'
  }
]

const availableFeet = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/feet/normal.png',
    label: 'Normal'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/feet/hoverboard.png',
    label: 'hoverboard'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/feet/rocket boots.png',
    label: 'rocket boots'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/feet/skateboard.png',
    label: 'skateboard'
  }
]

const availableHands = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/hands/normal.png',
    label: 'Normal'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/hands/cast left.png',
    label: 'cast left'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/hands/cast right.png',
    label: 'cast right'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/hands/kite.png',
    label: 'kite'
  }  
]

const availableSpikes = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/none.png',
    label: 'None'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/blue.png',
    label: 'blue'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/burnt orange.png',
    label: 'burnt orange'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/dark gray.png',
    label: 'dark gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/green.png',
    label: 'green'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/light gray.png',
    label: 'light gray'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/multicolor.png',
    label: 'multicolor'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/orange.png',
    label: 'orange'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/pink.png',
    label: 'pink'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/purple.png',
    label: 'purple'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/red.png',
    label: 'red'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/teal.png',
    label: 'teal'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/white.png',
    label: 'white'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/spikes/yellow.png',
    label: 'yellow'
  }
]

const availableHeads = [
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/none.png',
    label: 'None'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/bandana.png',
    label: 'bandana'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/cap backwards.png',
    label: 'cap backwards'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/cap forwards.png',
    label: 'cap forwards'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/chef.png',
    label: 'chef'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/crown.png',
    label: 'crown'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/headphones.png',
    label: 'headphones'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/long peak cap forwards.png',
    label: 'long peak cap forwards'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/mouse ears.png',
    label: 'mouse ears'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/silly yellow.png',
    label: 'silly yellow'
  },
  {
    value: '/tinydinosassets-main/images/traits/1600x1600/head/two tone cap backwards.png',
    label: 'two tone cap backwards'
  }
]


//#endregion

const ReactSelectorStyle = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: '#232323',
    borderColor: '#323232',
    height: '4vh',
    width: '30vw',
    marginTop: '0.5vh',
    fontFamily: "'Press Start 2P'",
  }),
  base: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "'Press Start 2P'",
  }),
  menuList: (provided: any, state: any) => ({
    ...provided,
    background: '#232323',
    borderColor: '#323232',
    fontFamily: "'Press Start 2P'",
  }),
  multiValue: (provided: any, state: any) => ({
    ...provided,
    background: '#434343',
    borderColor: '#323232',
  }),
  multiValueLabel: (provided: any, state: any) => ({
    ...provided,
    color: '#FFFFFF',
    fontFamily: "'Press Start 2P'",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: '#FFFFFF',
    background: state.isFocused ? '#434343' : '#232323'
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: '#FFFFFF'
  }),
  
}


const Home: NextPage = () => {
  
  let InitialValues = useRef([0,0,0,0,0,0,0,0,0])

  const [SelectedBackground, setSelectedBackground] = useState(availableBackgrounds[InitialValues.current[0]])
  const [SelectedBody, setSelectedBody] = useState(availableBodies[InitialValues.current[1]])
  const [SelectedChest, setSelectedChest] = useState(availableChests[InitialValues.current[2]])
  const [SelectedEyes, setSelectedEyes] = useState(availableEyes[InitialValues.current[3]])
  const [SelectedFace, setSelectedFace] = useState(availableFaces[InitialValues.current[4]])
  const [SelectedFeet, setSelectedFeet] = useState(availableFeet[InitialValues.current[5]])
  const [SelectedHands, setSelectedHands] = useState(availableHands[InitialValues.current[6]])
  const [SelectedHead, setSelectedHead] = useState(availableHeads[InitialValues.current[7]])
  const [SelectedSpikes, setSelectedSpikes] = useState(availableSpikes[InitialValues.current[8]])

  const RandomiseFeatures = () => { 
    InitialValues.current = [
      Math.floor(Math.random() * availableBackgrounds.length),
      Math.floor(Math.random() * availableBodies.length),
      Math.floor(Math.random() * availableChests.length),
      Math.floor(Math.random() * availableEyes.length),
      Math.floor(Math.random() * availableFaces.length),
      Math.floor(Math.random() * availableFeet.length),
      Math.floor(Math.random() * availableHands.length),
      Math.floor(Math.random() * availableHeads.length),
      Math.floor(Math.random() * availableSpikes.length)
  ]
  setSelectedBackground(availableBackgrounds[InitialValues.current[0]])
  setSelectedBody(availableBodies[InitialValues.current[1]])
  setSelectedChest(availableChests[InitialValues.current[2]])
  setSelectedEyes(availableEyes[InitialValues.current[3]])
  setSelectedFace(availableFaces[InitialValues.current[4]])
  setSelectedFeet(availableFeet[InitialValues.current[5]])
  setSelectedHands(availableHands[InitialValues.current[6]])
  setSelectedHead(availableHeads[InitialValues.current[7]])
  setSelectedSpikes(availableSpikes[InitialValues.current[8]])

  }

  const ExportImage = () => {
    mergeImages([SelectedBackground.value, SelectedBody.value, SelectedChest.value, SelectedEyes.value, SelectedFace.value, SelectedFeet.value, SelectedHands.value, SelectedHead.value, SelectedSpikes.value])
      .then(b64 => {
        const linkSource = b64
        const downloadLink = document.createElement("a")
        downloadLink.href = linkSource
        downloadLink.download = "TinyDino.png"
        downloadLink.click()
      });
  }

  useEffect(() => { 
    RandomiseFeatures()
  }, [])

  let testref = useRef()
  

  
  //console.log(SelectedBody)
  return (
    <div className={styles.container}>

      <Head>
        <title>Tiny Dino Builder</title>
      </Head>
      <h1 className={styles.Title}>Tiny Dino Builder</h1>
      <p className={styles.subtitle}>Initial loading of images will be very noticeable, this will only occur the first time you use the website and select each trait. Apologies!</p>
      <main className={styles.main}>
        <div className={styles.controls}>
    
          <h1 className={styles.Subheading}>Background</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedBackground}
            options={availableBackgrounds}
            styles={ReactSelectorStyle}
            defaultValue={SelectedBackground}
            value={SelectedBackground}
          />

          <h1 className={styles.Subheading}>Body</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedBody}
            options={availableBodies}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedBody}
            value={SelectedBody}
          />

          <h1 className={styles.Subheading}>Chest</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedChest}
            options={availableChests}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedChest}
            value={SelectedChest}
          />

          <h1 className={styles.Subheading}>Eyes</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedEyes}
            options={availableEyes}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedEyes}
            value={SelectedEyes}
          />

          <h1 className={styles.Subheading}>Face</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedFace}
            options={availableFaces}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedFace}
            value={SelectedFace}
          />

          <h1 className={styles.Subheading}>Feet</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedFeet}
            options={availableFeet}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedFeet}
            value={SelectedFeet}
          />

          <h1 className={styles.Subheading}>Hands</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedHands}
            options={availableHands}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedHands}
            value={SelectedHands}
          />


          <h1 className={styles.Subheading}>Spikes</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedSpikes}
            options={availableSpikes}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedSpikes}
            value={SelectedSpikes}
          />

          <h1 className={styles.Subheading}>Head</h1>
          <Select
            //@ts-expect-error
            onChange={setSelectedHead}
            options={availableHeads}
            className={styles.Selector}
            styles={ReactSelectorStyle}
            defaultValue={SelectedHead}
            value={SelectedHead}
          />

          

          <div className={styles.buttonGrid}>  
            <button className={styles.Button} style={{backgroundColor: '#e906b8', borderColor: '#61004c'}} onClick={() => RandomiseFeatures()}>
              Randomise!
            </button>       
            <button className={styles.Button} style={{backgroundColor: '#02C650', borderColor: '#017630'}} onClick={() => ExportImage()}>
              Export!
            </button>   
            <Link passHref href={'/aboutme'}>
              <button className={styles.Button} style={{backgroundColor: '#0063EA', borderColor: '#002860'}}>
                About Me!
              </button>     
            </Link>

          </div>
         
        </div>

        <div className={styles.editorGrid}>
          <img
            src={String(SelectedBackground.value)}
            className={styles.imageLayer}
            style={{opacity: SelectedBackground.value == 'none' ? 0 : 1}}
          />
          <img
            src={String(SelectedBody.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedChest.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedEyes.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedFace.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedFeet.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedHands.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedSpikes.value)}
            className={styles.imageLayer}
          />
          <img
            src={String(SelectedHead.value)}
            className={styles.imageLayer}
          />
        </div>
        

      </main>
    </div>
  )
}

// export function getServerSideProps(context: any) {
//   let fs = require('fs');
//   let files = fs.readdirSync(process.cwd() + '/public/tinydinosassets-main/images/traits/1600x1600/spikes/');
//   console.log(files)
//   let availableBodies = []
//   for (let file in files) {
//     availableBodies.push({ value: '/tinydinosassets-main/images/traits/1600x1600/spikes/' + files[file], label: files[file].substring(0, files[file].length - 4) })
//   }
//   console.log(availableBodies)
//   return {
//     props: { availableBodies }
//   }
// }

export default Home
