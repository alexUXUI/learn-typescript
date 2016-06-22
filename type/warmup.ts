class Artist {
  constructor (
    public name: string
  ) {
    console.log(`instantiated ${name}`)
  }
}

class StreetArtist extends Artist {
  constructor (
    art: Artist,
    public medium: string
  ) {
    super(art.name)
    console.log(`instantiated street artist ${this.name}`)
  }
}

interface Human {
  name: string
}

function getStreetArtist(StreetArtist: Human) {
  console.log(StreetArtist.name)
}

let shepherdF = new Artist('shep')
let Banksy = new StreetArtist(shepherdF, "graffitti")
let gats = new StreetArtist({name: "gats"}, "sick graff")

getStreetArtist(gats)
