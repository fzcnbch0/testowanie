import express, { response } from 'express'
const router = express.Router();

const students = [
    {
        id: 1,
        name: "Dariusz",
        surname: "Kaźmierski",
        email: "Dariusz.Kaźmierski@uczen.zsk.poznan.pl"
    },
    {
        id: 2,
        name: "Alfred",
        surname: "Dębiński",
        email: "Alfred.Dębiński@uczen.zsk.poznan.pl"
    },
    {
        id: 3,
        name: "Michał",
        surname: "Tuszak",
        email: "Michał.Tuszak@uczen.zsk.poznan.pl"
    },
    {
        id: 4,
        name: "Kacper",
        surname: "Kowalski",
        email: "Kacper.Kowalski@uczen.zsk.poznan.pl"
    },
    {
        id: 5,
        name: "Mieczysław",
        surname: "Nowak",
        email: "Mieczysław.Nowak@uczen.zsk.poznan.pl"
    },
    {
        id: 6,
        name: "Marcel",
        surname: "Pietrzak",
        email: "Marcel.Pietrzak@uczen.zsk.poznan.pl"
    },
    {
        id: 7,
        name: "Ania",
        surname: "Stępień",
        email: "Ania.Stępień@uczen.zsk.poznan.pl"
    },
    {
        id: 8,
        name: "Robert",
        surname: "Wielki",
        email: "Robert.Wielki@uczen.zsk.poznan.pl"
    },
    {
        id: 9,
        name: "Szymon",
        surname: "Raczek",
        email: "Szymon.Raczek@uczen.zsk.poznan.pl"
    },
    {
        id: 10,
        name: "Mateusz",
        surname: "Paczyński",
        email: "Mateusz.Paczyński@uczen.zsk.poznan.pl"
    }
]

const subjects = [
    {
        id: 1,
        name: "polski",
        hoursAWeek: 3
    },
    {
        id: 2,
        name: "matematyka",
        hoursAWeek: 3
    },
    {
        id: 3,
        name: "angielski",
        hoursAWeek: 2
    },
    {
        id: 4,
        name: "niemiecki",
        hoursAWeek: 1
    },
    {
        id: 5,
        name: "wf",
        hoursAWeek: 3
    },
    {
        id: 6,
        name: "religia",
        hoursAWeek: 0
    },
    {
        id: 7,
        name: "biologia",
        hoursAWeek: 1
    },
    {
        id: 8,
        name: "fizyka",
        hoursAWeek: 1
    },
    {
        id: 9,
        name: "geografia",
        hoursAWeek: 1
    },
    {
        id: 10,
        name: "chemia",
        hoursAWeek: 1
    }
]

router.get('/', async (req, res) => {
    let link1 = "/students - zwraca listę 10 obiektów "
    let link2 = "/students/{id} - zwraca studenta z określonym identyfikatorem jeśli istnieje "
    let link3 = "/subjects - zwraca listę 10 przedmiotów szkolnych "
    let link4 = "/subjects/{id} - zwraca przedmiot z określonym identyfikatorem jeśli istnieje "
    res.json(link1 + link2 + link3 + link4)
})

router.get('/students', (req, res) => {
    res.json(students)
})

router.get('/students/:id', (req, res) => {
    const requestedId = req.params.id-1;
    if(students[requestedId]) {
        res.json(students[requestedId])
    }
    else {
        res.status(404).json({ message: "Nie znaleziono studenta o podanym ID" })
    }
})

router.get('/subjects', (req, res) => {
    res.json(subjects)
})

router.get('/subjects/:id', (req, res) => {
    const requestedId = req.params.id-1;
    if(subjects[requestedId]) {
        res.json(subjects[requestedId])
    }
    else {
        res.status(404).json({ message: "Nie znaleziono przedmiotu o podanym ID" })
    }
})

export {router as apiRouter}