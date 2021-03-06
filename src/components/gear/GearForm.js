import React, { Component } from 'react'
import Navbar from "../nav/Navbar"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import musician from "./images/Musician.png"
import 'mdbreact/dist/css/mdb.css';
import "./GearForm.css"

export default class GearForm extends Component {

    userId = JSON.parse(sessionStorage.getItem("loginUser")).id;
    // set intial state
    state = {}

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructor(props) {
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.addToggle = this.addToggle.bind(this);
        this.guitarChoiceNested = this.guitarChoiceNested.bind(this);
        this.acousticNested = this.acousticNested.bind(this);
        this.electricNested = this.electricNested.bind(this);
        this.bassNested = this.bassNested.bind(this);
        this.acousticBassNested = this.acousticBassNested.bind(this);
        this.ampChoiceNested = this.ampChoiceNested.bind(this);
        this.amplifierNested = this.amplifierNested.bind(this);
        this.comboNested = this.comboNested.bind(this);
        this.processorNested = this.processorNested.bind(this);
        this.practiceAmpNested = this.practiceAmpNested.bind(this);
        this.pedalChoiceNested = this.pedalChoiceNested.bind(this);
        this.overdriveNested = this.overdriveNested.bind(this);
        this.distortionNested = this.distortionNested.bind(this);
        this.modulationNested = this.modulationNested.bind(this);
        this.fuzzNested = this.fuzzNested.bind(this);
        this.cabinetNested = this.cabinetNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

        this.state = {
            modal: false,
            guitarChoiceModal: false,
            acousticModal: false,
            electricModal: false,
            bassModal: false,
            acousticBassModal: false,
            ampChoiceModal: false,
            ampModal: false,
            comboModal: false,
            practiceAmpModal: false,
            pedalChoiceModal: false,
            overdriveModal: false,
            distortionModal: false,
            fuzzModal: false,
            modulationModal: false,
            closeAll: false,
            addModal: false,
            acousticGuitarMake: "",
            acousticGuitarModel: "",
            acousticGuitarStrings: "",
            acousticGuitarPickup: "",
            acousticGuitarBackSides: "",
            acousticGuitarTop: "",
            acousticGuitarSpecialFeatures: "",
            acousticBassGuitarMake: "",
            acousticBassGuitarModel: "",
            acousticBassGuitarStrings: "",
            acousticBassGuitarPickup: "",
            acousticBassGuitarBackSides: "",
            acousticBassGuitarTop: "",
            acousticBassGuitarSpecialFeatures: "",
            electricGuitarMake: "",
            electricGuitarModel: "",
            electricGuitarStrings: "",
            electricGuitarPickups: "",
            electricGuitarBodyWood: "",
            electricGuitarNeck: "",
            electricGuitarSpecialFeatures: "",
            bassGuitarMake: "",
            bassGuitarModel: "",
            bassGuitarStrings: "",
            bassGuitarPickups: "",
            bassGuitarNeck: "",
            bassGuitarBodyWood: "",
            bassGuitarSpecialFeatures: "",
            amplifierMake: "",
            amplifierModel: "",
            amplifierPowerSection: "",
            amplifierPreampSection: "",
            amplifierWattage: "",
            amplifierMatching: "",
            amplifierSpecialFeatures: "",
            comboMake: "",
            comboModel: "",
            comboPowerSection: "",
            comboPreampSection: "",
            comboWattage: "",
            comboSpeakers: "",
            comboSpecialFeatures: "",
            overdriveMake: "",
            overdriveModel: "",
            overdriveStyle: "",
            overdrivePowerDraw: "",
            overdriveTrueBypass: "",
            overdriveTopSideLoaded: "",
            overdriveSpecialFeatures: "",
            distortionMake: "",
            distortionModel: "",
            distortionStyle: "",
            distortionPowerDraw: "",
            distortionTrueBypass: "",
            distortionTopSideLoaded: "",
            distortionSpecialFeatures: "",
            fuzzMake: "",
            fuzzmodel: "",
            fuzzStyle: "",
            fuzzPowerDraw: "",
            fuzzTrueBypass: "",
            fuzzTopSideLoaded: "",
            fuzzSpecialFeatures: "",
            modulationMake: "",
            modulationModel: "",
            modulationType: "",
            modulationPowerDraw: "",
            modulationTrueBypass: "",
            modulationTopSideLoaded: "",
            modulationSpecialFeatures: "",
            processorMake: "",
            processorModel: "",
            processorStyle: "",
            proceesorSize: "",
            processorMIDI: "",
            processorPowerAmp: "",
            processorSpecialFeatures: "",
            practiceAmpMake: "",
            practiceAmpModel: "",
            practiceAmpStyle: "",
            practiceAmpWattage: "",
            practiceAmpMIDI: "",
            practiceAmpSpeakers: "",
            practiceAmpSpecialFeatures: "",
            cabinetMake: "",
            cabinetModel: "",
            cabinetSpeakers: "",
            cabinetWoodType: "",
            cabinetTolexColor: "",
            cabinetOpenClosedBack: "",
            cabinetSlantedStraight: "",
            loginUser: "",
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    addToggle() {
        this.setState({
            addModal: !this.state.addModal
        });
    }

    guitarChoiceNested() {
        this.setState({
            guitarChoiceModal: !this.state.guitarChoiceModal
        })
    }

    acousticNested() {
        this.setState({
            acousticModal: !this.state.acousticModal,
            closeAll: false
        });
    }

    electricNested() {
        this.setState({
            electricModal: !this.state.electricModal,
            closeAll: false
        });
    }

    bassNested() {
        this.setState({
            bassModal: !this.state.bassModal,
            closeAll: false
        });
    }

    acousticBassNested() {
        this.setState({
            acousticBassModal: !this.state.acousticBassModal,
            closeAll: false
        });
    }

    ampChoiceNested() {
        this.setState({
            ampChoiceModal: !this.state.ampChoiceModal,
            closeAll: false
        })
    }

    amplifierNested() {
        this.setState({
            ampModal: !this.state.ampModal,
            closeAll: false
        });
    }

    comboNested() {
        this.setState({
            comboModal: !this.state.comboModal,
            closeAll: false
        });
    }

    practiceAmpNested() {
        this.setState({
            practiceAmpModal: !this.state.practiceAmpModal,
            closeAll: false
        });
    }

    pedalChoiceNested() {
        this.setState({
            pedalChoiceModal: !this.state.pedalChoiceModal,
            closeAll: false
        })
    }

    overdriveNested() {
        this.setState({
            overdriveModal: !this.state.overdriveModal,
            closeAll: false
        });
    }

    distortionNested() {
        this.setState({
            distortionModal: !this.state.distortionModal,
            closeAll: false
        });
    }

    fuzzNested() {
        this.setState({
            fuzzModal: !this.state.fuzzModal,
            closeAll: false
        });
    }

    modulationNested() {
        this.setState({
            modulationModal: !this.state.modulationModal,
            closeAll: false
        });
    }

    processorNested() {
        this.setState({
            processorModal: !this.state.processorModal,
            closeAll: false
        });
    }

    cabinetNested() {
        this.setState({
            cabinetModal: !this.state.cabinetModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    createAcousticPost = evt => {
        evt.preventDefault()
        if (this.state.acousticGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarBackSides === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarTop === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const acoustic = {
                make: this.state.acousticGuitarMake,
                model: this.state.acousticGuitarModel,
                strings: this.state.acousticGuitarStrings,
                pickup: this.state.acousticGuitarPickup,
                backSides: this.state.acousticGuitarBackSides,
                top: this.state.acousticGuitarTop,
                features: this.state.acousticGuitarSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAcoustic(acoustic, "acoustics").then(() => this.props.history.push("/gear"))
            this.acousticNested()
            this.guitarChoiceNested()
            this.toggle()
            this.addToggle()
        }

    }

    createAcousticBassPost = evt => {
        evt.preventDefault()
        if (this.state.acousticBassGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarBackSides === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarTop === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticBassGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const acousticBass = {
                make: this.state.acousticBassGuitarMake,
                model: this.state.acousticBassGuitarModel,
                strings: this.state.acousticBassGuitarStrings,
                pickup: this.state.acousticBassGuitarPickup,
                backSides: this.state.acousticBassGuitarBackSides,
                top: this.state.acousticBassGuitarTop,
                features: this.state.acousticBassGuitarSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAcousticBass(acousticBass, "acousticBasses").then(() => this.props.history.push("/gear"))
            // toggle a modal
            this.acousticBassNested()
            this.guitarChoiceNested()
            this.toggle()
            this.addToggle()
        }

    }

    createElectricPost = evt => {
        evt.preventDefault()
        if (this.state.electricGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarNeck === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const electric = {
                make: this.state.electricGuitarMake,
                model: this.state.electricGuitarModel,
                strings: this.state.electricGuitarStrings,
                pickups: this.state.electricGuitarPickups,
                body: this.state.electricGuitarBodyWood,
                neck: this.state.electricGuitarNeck,
                features: this.state.electricGuitarSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addElectric(electric, "electrics").then(() => this.props.history.push("/gear"))
            this.electricNested()
            this.guitarChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createBassPost = evt => {
        evt.preventDefault()
        if (this.state.bassGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarNeck === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const bass = {
                make: this.state.bassGuitarMake,
                model: this.state.bassGuitarModel,
                strings: this.state.bassGuitarStrings,
                pickups: this.state.bassGuitarPickups,
                body: this.state.bassGuitarBodyWood,
                neck: this.state.bassGuitarNeck,
                features: this.state.bassGuitarSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addBass(bass, "basses").then(() => this.props.history.push("/gear"))
            this.bassNested()
            this.guitarChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createAmplifierPost = evt => {
        evt.preventDefault()
        if (this.state.amplifierMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierPowerSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierPreampSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierWattage === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierMatchingCab === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const amplifier = {
                make: this.state.amplifierMake,
                model: this.state.amplifierModel,
                powerSection: this.state.amplifierPowerSection,
                preampSection: this.state.amplifierPreampSection,
                wattage: this.state.amplifierWattage,
                matching: this.state.amplifierMatching,
                features: this.state.amplifierSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addAmplifier(amplifier, "amplifiers").then(() => this.props.history.push("/gear"))
            this.amplifierNested()
            this.ampChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createComboPost = evt => {
        evt.preventDefault()
        if (this.state.comboMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboPowerSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboPreampSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboWattage === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboSpeakers === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const combo = {
                make: this.state.comboMake,
                model: this.state.comboModel,
                powerSection: this.state.comboPowerSection,
                preampSection: this.state.comboPreampSection,
                wattage: this.state.comboWattage,
                speakers: this.state.comboSpeakers,
                features: this.state.comboSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addCombo(combo, "combos").then(() => this.props.history.push("/gear"))
            this.comboNested()
            this.ampChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createProcessorPost = evt => {
        evt.preventDefault()
        if (this.state.processorMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorSize === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorMIDI === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorPowerAmp === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.processorSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const processor = {
                make: this.state.processorMake,
                model: this.state.processorModel,
                style: this.state.processorStyle,
                size: this.state.processorSize,
                bypass: this.state.processorMIDI,
                jacks: this.state.processorPowerAmp,
                features: this.state.processorSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addProcessor(processor, "processors").then(() => this.props.history.push("/gear"))
            this.processorNested()
            this.ampChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createPracticeAmpPost = evt => {
        evt.preventDefault()
        if (this.state.practiceAmpMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpWattage === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpMIDI === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpSpeakers === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.practiceAmpSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const practice = {
                make: this.state.practiceAmpMake,
                model: this.state.practiceAmpModel,
                style: this.state.practiceAmpStyle,
                wattage: this.state.practiceAmpWattage,
                MIDI: this.state.practiceAmpMIDI,
                speakers: this.state.practiceAmpSpeakers,
                features: this.state.practiceAmpSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addPracticeAmp(practice, "practices").then(() => this.props.history.push("/gear"))
            this.practiceAmpNested()
            this.ampChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createOverdrivePost = evt => {
        evt.preventDefault()
        if (this.state.overdriveMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdrivePowerDraw === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveTrueBypass === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveTopSideLoaded === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const overdrive = {
                make: this.state.overdriveMake,
                model: this.state.overdriveModel,
                style: this.state.overdriveStyle,
                draw: this.state.overdrivePowerDraw,
                bypass: this.state.overdriveTrueBypass,
                jacks: this.state.overdriveTopSideLoaded,
                features: this.state.overdriveSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addOverdrive(overdrive, "overdrives").then(() => this.props.history.push("/gear"))
            this.overdriveNested()
            this.pedalChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createDistortionPost = evt => {
        evt.preventDefault()
        if (this.state.distortionMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionPowerDraw === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionTrueBypass === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionTopSideLoaded === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.distortionSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const distortion = {
                make: this.state.distortionMake,
                model: this.state.distortionModel,
                style: this.state.distortionStyle,
                draw: this.state.distortionPowerDraw,
                bypass: this.state.distortionTrueBypass,
                jacks: this.state.distortionTopSideLoaded,
                features: this.state.distortionSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addDistortion(distortion, "distortions").then(() => this.props.history.push("/gear"))
            this.distortionNested()
            this.pedalChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createModulationPost = evt => {
        evt.preventDefault()
        if (this.state.modulationMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationType === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationPowerDraw === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationTrueBypass === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationTopSideLoaded === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.modulationSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const modulation = {
                make: this.state.modulationMake,
                model: this.state.modulationModel,
                type: this.state.modulationType,
                draw: this.state.modulationPowerDraw,
                bypass: this.state.modulationTrueBypass,
                jacks: this.state.modulationTopSideLoaded,
                features: this.state.modulationSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addModulation(modulation, "modulations").then(() => this.props.history.push("/gear"))
            this.modulationNested()
            this.pedalChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createFuzzPost = evt => {
        evt.preventDefault()
        if (this.state.fuzzMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzPowerDraw === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzTrueBypass === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzTopSideLoaded === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.fuzzSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const fuzz = {
                make: this.state.fuzzMake,
                model: this.state.fuzzModel,
                style: this.state.fuzzStyle,
                draw: this.state.fuzzPowerDraw,
                bypass: this.state.fuzzTrueBypass,
                jacks: this.state.fuzzTopSideLoaded,
                features: this.state.fuzzSpecialFeatures,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addFuzz(fuzz, "fuzzes").then(() => this.props.history.push("/gear"))
            this.fuzzNested()
            this.pedalChoiceNested()
            this.toggle()
            this.addToggle()
        }
    }

    createCabinetPost = evt => {
        evt.preventDefault()
        if (this.state.cabinetMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetSpeakers === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetWoodType === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetTolexColor === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetOpenClosedBack === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetSlantedStraight === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const cabinet = {
                make: this.state.cabinetMake,
                model: this.state.cabinetModel,
                speakers: this.state.cabinetSpeakers,
                woodType: this.state.cabinetWoodType,
                tolex: this.state.cabinetTolexColor,
                back: this.state.cabinetOpenClosedBack,
                slantedStraight: this.state.cabinetSlantedStraight,
                loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            }
            this.props.addCabinet(cabinet, "cabinets").then(() => this.props.history.push("/gear"))
            this.cabinetNested()
            this.toggle()
            this.addToggle()
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    logout={this.logout} />

                <div>
                    <Modal isOpen={this.state.addModal} toggle={this.addToggle} className={this.props.className}>
                        <ModalBody>
                            <h4 className="addedNotification">Your Post Has Been Added!</h4>
                            <img src={musician} className="icon--musician" />
                            <Button color="secondary" className="addedButton" onClick={this.addToggle}>Close</Button>
                        </ModalBody>
                    </Modal>
                </div>
                <div className="addGearButton">
                    <Button color="primary" className="addGear" onClick={this.toggle}>{this.props.buttonLabel}Add Gear</Button>
                </div>
                <p></p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?</ModalHeader>
                    <ModalBody>
                        <Button color="primary" onClick={this.ampChoiceNested} className="ampButton">Amplifier</Button>
                        <Modal isOpen={this.state.ampChoiceModal} toggle={this.ampChoiceNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalBody>
                                <ModalHeader>What Kind of Amplifier Would You Like to Add?</ModalHeader>
                                <Button color="#757575 grey darken-1" onClick={this.amplifierNested} className="ampHeadButton" >Amplifier Head</Button>
                                <Button color="#ffcc80 orange lighten-3" onClick={this.comboNested} className="comboAmpButton">Combo Amplifier</Button>
                                <Button color="#e0e0e0 grey lighten-2" onClick={this.practiceAmpNested} className="practiceAmpButton">Practice Amplifier</Button>
                                <Button color="#616161 grey darken-2" onClick={this.processorNested} className="processorButton">Amp Modeler</Button>
                                <ModalFooter>
                                    <Button color="#9575cd deep-purple lighten-2" onClick={this.ampChoiceNested}>Back</Button>{' '}
                                </ModalFooter>
                            </ModalBody>
                        </Modal>
                        <Button color="#ef5350 red lighten-1" onClick={this.guitarChoiceNested} className="guitarButton">Guitar</Button>
                        <Modal isOpen={this.state.guitarChoiceModal} toggle={this.guitarChoiceNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalBody>
                                <ModalHeader>What Kind of Guitar Would You Like to Add?</ModalHeader>
                                <Button color="#a1887f brown lighten-2" onClick={this.acousticNested} className="acousticButton">Acoustic Guitar</Button>
                                <Button color="#0091ea light-blue accent-4" onClick={this.bassNested} className="bassButton">Bass Guitar</Button>
                                <Button color="#d7ccc8 brown lighten-4" onClick={this.acousticBassNested} className="acousticBassButton">Acoustic Bass Guitar</Button>
                                <Button color="#ef5350 red lighten-1" onClick={this.electricNested} className="electricButton">Electric Guitar</Button>
                                <ModalFooter>
                                    <Button color="#9575cd deep-purple lighten-2" onClick={this.guitarChoiceNested}>Back</Button>{' '}
                                </ModalFooter>
                            </ModalBody>
                        </Modal>
                        <Button color="#00e676 green accent-3" onClick={this.pedalChoiceNested} className="pedalButton">Pedal</Button>
                        <Modal isOpen={this.state.pedalChoiceModal} toggle={this.pedalChoiceNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalBody>
                                <ModalHeader>What Kind of Effects Pedal Would You Like to Add?</ModalHeader>
                                <Button color="#00e676 green accent-3" onClick={this.overdriveNested} className="overdriveButton">Overdrive Pedal</Button>
                                <Button color="#ff7043 deep-orange lighten-1" onClick={this.fuzzNested} className="fuzzButton">Fuzz Pedal</Button>
                                <Button color="#03a9f4 light-blue" onClick={this.modulationNested} className="modulationButton">Modulation Pedal</Button>
                                <Button color="#ff5252 red accent-2" onClick={this.distortionNested} className="distortionButton">Distortion Pedal</Button>
                                <ModalFooter>
                                    <Button color="#9575cd deep-purple lighten-2" onClick={this.pedalChoiceNested}>Back</Button>{' '}
                                </ModalFooter>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.ampModal} toggle={this.amplifierNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Amplifier Features</ModalHeader>
                            <ModalBody>
                                <Form className="amplifierForm">
                                    <FormGroup>
                                        <Label for="amplifierMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierMake" placeholder="Make (ex. Marshall)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierModel" placeholder="Model (ex. JCM 800)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierPowerSection">Power Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierPowerSection" placeholder="Power Section (ex. Solid State Power Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierPreampSection">Preamp Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierPreampSection" placeholder="Preamp Section (ex. Tube Preamp Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierWattage">Amplifier Wattage:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierWattage" placeholder="Amplifier Wattage (ex. 50 Watts)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierMatching">Matching Cabinet for Amplifier?:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierMatching" placeholder="Matching Cabinet for Amplifier (ex. Yes)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAmplifierPost}>Add Amplifier Head</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.amplifierNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.comboModal} toggle={this.comboNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Combo Amplifier Features</ModalHeader>
                            <ModalBody>
                                <Form className="comboForm">
                                    <FormGroup>
                                        <Label for="comboMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboMake" placeholder="Make (ex. Dr. Z)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboModel" placeholder="Model (ex. Carmen Ghia)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboPowerSection">Power Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboPowerSection" placeholder="Power Section (ex. Solid State Power Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboPreampSection">Preamp Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboPreampSection" placeholder="Preamp Section (ex. Tube Preamp Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboWattage">Amplifier Wattage:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboWattage" placeholder="Amplifier Wattage (ex. 50 Watts)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboSpeakers">Speakers:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboSpeakers" placeholder="Speakers (ex. V30s)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createComboPost}>Add Combo Amp</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.comboNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.acousticModal} toggle={this.acousticNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader className="acousticHeader">Acoustic Guitar Features</ModalHeader>
                            <ModalBody className="acousticMake">
                                <Form className="acousticForm">
                                    <FormGroup>
                                        <Label for="acousticGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} autofocus="true" name="text" id="acousticGuitarMake" placeholder="Make (ex. Taylor)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarModel" placeholder="Model (ex. 514ce)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarStrings" placeholder="Strings (ex. Elixir 12-53)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarPickup" placeholder="Pickup (if no pickup is installed, please enter 'none.')" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarTop">Top:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarTop" placeholder="Top (ex. Sitka Spruce)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarBackSides">Back and Sides:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarBackSides" placeholder="Back and Sides (ex. Indian Rosewood)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="specialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarSpecialFeatures" placeholder="Special Features (ex. added Fishman preamp or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAcousticPost}>Add Acoustic Guitar</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.acousticNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.acousticBassModal} toggle={this.acousticBassModal} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader className="acousticBassHeader">Acoustic Bass Guitar Features</ModalHeader>
                            <ModalBody className="acousticBassMake">
                                <Form className="acousticBassForm">
                                    <FormGroup>
                                        <Label for="acousticBassGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarMake" placeholder="Make (ex. Martin)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarModel" placeholder="Model (ex. BCPA4)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarStrings" placeholder="Strings (ex. Martin 45-105)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarPickup">Pickup:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarPickup" placeholder="Pickup (if no pickup is installed, please enter 'none.')" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarTop">Top:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarTop" placeholder="Top (ex. Sitka Spruce)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarBackSides">Back and Sides:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarBackSides" placeholder="Back and Sides (ex. Sapele)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticBassGuitarSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticBassGuitarSpecialFeatures" placeholder="Special Features (ex. added Fishman preamp or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAcousticBassPost}>Add Acoustic Bass Guitar</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.acousticBassNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.electricModal} toggle={this.electricNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Electric Guitar Features</ModalHeader>
                            <ModalBody>
                                <Form className="guitarForm">
                                    <FormGroup>
                                        <Label for="electricGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarMake" placeholder="Make (ex. PRS)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarModel" placeholder="Model (ex. Custom 22)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarStrings" placeholder="Strings (ex. Ernie Ball 10-46)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarPickups" placeholder="Pickups (ex. Seymour Duncan Pearly Gates)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarNeck">Neck and Fretboard Material:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarNeck" placeholder="Neck and Fretboard Material (ex. Maple Neck w/ Ebony Fretboard)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarBodyWood">Body Wood:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarBodyWood" placeholder="Body Wood (ex. Alder)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Special Features:</Label>
                                        <Input type="texta" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarSpecialFeatures" placeholder="Special Features (ex. Evertune bridge installed or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createElectricPost}>Add Electric Guitar</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.electricNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.bassModal} toggle={this.bassNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Bass Guitar Features</ModalHeader>
                            <ModalBody>
                                <Form className="bassForm">
                                    <FormGroup>
                                        <Label for="bassGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarMake" placeholder="Make (ex. Fender)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarModel" placeholder="Model (ex. Precision Bass)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarStrings" placeholder="Strings (ex. Ernie Ball 45-105)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarPickups" placeholder="Pickups (ex. Bareknuckle '58 Split Coil)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarNeck">Neck and Fretboard Material:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarNeck" placeholder="Neck and Fretboard Material (ex. Maple Neck w/ Ebony Fretboard)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarBodyWood">Body Wood:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarBodyWood" placeholder="Body Wood (ex. Swamp Ash)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarSpecialFeatures" placeholder="Special Features (ex. Hipshot Xtender installed or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createBassPost}>Add Bass Guitar</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.bassNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.overdriveModal} toggle={this.overdriveNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Effect Pedal Features</ModalHeader>
                            <ModalBody>
                                <Form className="overdriveForm">
                                    <FormGroup>
                                        <Label for="overdriveMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveMake" placeholder="Make (ex. JHS)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveModel" placeholder="Model (ex. Moonshine)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveStyle" placeholder="Style (ex. Bluesbreaker)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdrivePowerDraw">Power Draw:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdrivePowerDraw" placeholder="Power Draw (ex. 9V or 18V)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveTrueBypass">True Bypass:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveTrueBypass" placeholder="True Bypass (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveTopSideLoaded">Side or Top-Mounted Jacks:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveTopSideLoaded" placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveSpecialFeatures" placeholder="Special Features (ex. 'Keeley Seeing-Eye' Mod or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createOverdrivePost}>Add Overdrive Pedal</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.overdriveNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.distortionModal} toggle={this.distortionNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Distortion Pedal Features</ModalHeader>
                            <ModalBody>
                                <Form className="distortionForm">
                                    <FormGroup>
                                        <Label for="distortionMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionMake" placeholder="Make (ex. Lone Wolf Audio)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionModel" placeholder="Model (ex. Metalzone)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionStyle" placeholder="Style (ex. Rat)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionPowerDraw">Power Draw:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionPowerDraw" placeholder="Power Draw (ex. 9V or 18V)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionTrueBypass">True Bypass:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionTrueBypass" placeholder="True Bypass (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionTopSideLoaded">Side or Top-Mounted Jacks:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionTopSideLoaded" placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="distortionSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="distortionSpecialFeatures" placeholder="Special Features (ex. 'Analogman Modded' Mod or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createDistortionPost}>Add Distortion Pedal</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.distortionNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.fuzzModal} toggle={this.fuzzNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Fuzz Pedal Features</ModalHeader>
                            <ModalBody>
                                <Form className="fuzzForm">
                                    <FormGroup>
                                        <Label for="fuzzMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzMake" placeholder="Make (ex. Electro Harmonix)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzModel" placeholder="Model (ex. Big Muff)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzStyle" placeholder="Style (ex. Civil War)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzPowerDraw">Power Draw:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzPowerDraw" placeholder="Power Draw (ex. 9V or 18V)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzTrueBypass">True Bypass:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzTrueBypass" placeholder="True Bypass (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzTopSideLoaded">Side or Top-Mounted Jacks:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzTopSideLoaded" placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fuzzSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="fuzzSpecialFeatures" placeholder="Special Features (ex. 'Analogman Modded' Mod or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createFuzzPost}>Add Fuzz Pedal</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.fuzzNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.modulationModal} toggle={this.modulationNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Modulation Pedal Features</ModalHeader>
                            <ModalBody>
                                <Form className="modulationForm">
                                    <FormGroup>
                                        <Label for="modulationMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationMake" placeholder="Make (ex. Boss)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationModel" placeholder="Model (ex. DD-2)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationType">Type:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationType" placeholder="Style (ex. Chorus)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationPowerDraw">Power Draw:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationPowerDraw" placeholder="Power Draw (ex. 9V or 18V)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationTrueBypass">True Bypass:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationTrueBypass" placeholder="True Bypass (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationTopSideLoaded">Side or Top-Mounted Jacks:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationTopSideLoaded" placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="modulationSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="modulationSpecialFeatures" placeholder="Special Features (ex. 'No Tremolo Volume Drop' Mod or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createModulationPost}>Add Modulation Pedal</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.modulationNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.processorModal} toggle={this.processorNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Amplifier Modeler Features</ModalHeader>
                            <ModalBody>
                                <Form className="processorForm">
                                    <FormGroup>
                                        <Label for="processorMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorMake" placeholder="Make (ex. Line 6)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorModel" placeholder="Model (ex. Helix)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorStyle" placeholder="Style (ex. Amp Modeler)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorSize">Size:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorSize" placeholder="Unit Size (ex. Small, Medium, Large)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorMIDI">MIDI Capable?:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorMIDI" placeholder="Has MIDI Capabilities (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorPowerAmp">Has Power Amp Built In:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorPowerAmp" placeholder="Has Power Amp Built In (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="processorSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="processorSpecialFeatures" placeholder="Special Features (ex. 'Signed By Steve Vai?' or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createProcessorPost}>Add Amp Modeler</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.processorNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.practiceAmpModal} toggle={this.practiceAmpNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Practice Amp Features</ModalHeader>
                            <ModalBody>
                                <Form className="practiceAmpForm">
                                    <FormGroup>
                                        <Label for="practiceAmpMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpMake" placeholder="Make (ex. Peavey)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpModel" placeholder="Model (ex. Decade)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpStyle" placeholder="Style (ex. Digital)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpWattage">Wattage:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpWattage" placeholder="Wattage (ex. 10 Watts)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpMIDI">MIDI Capable?:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpMIDI" placeholder="Has MIDI Capabilities (ex. Yes!)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpSpeakers">Speakers:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpSpeakers" placeholder="Speakers (ex. Peavey Black Shadow)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="practiceAmpSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="practiceAmpSpecialFeatures" placeholder="Special Features (ex. 'clipped diode' or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createPracticeAmpPost}>Add Practice Amp</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.practiceAmpNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <Button color="#ffa726 orange lighten-1" onClick={this.cabinetNested} className="cabinetButton">Speaker Cabinet</Button>
                        <Modal isOpen={this.state.cabinetModal} toggle={this.cabinetNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Speaker Cabinet Features</ModalHeader>
                            <ModalBody>
                                <Form className="cabinetForm">
                                    <FormGroup>
                                        <Label for="cabinetMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetMake" placeholder="Make (ex. Orange)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetModel" placeholder="Model (ex. PPC412)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetSpeakers">Speakers:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetSpeakers" placeholder="Speakers (ex. Vintage 30s)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetWoodType">Wood Type:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetWoodType" placeholder="Wood Type (ex. Birch)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetTolexColor">Tolex Color:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetTolexColor" placeholder="Tolex Color (ex. Matamp Green) If no tolex, leave 'none' or 'natural finish'" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetOpenClosedBack">Open, Partial, or Closed Back:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetOpenClosedBack" placeholder="Open, Partial, or Closed Back (ex. Closed Back)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetSlantedStraight">Slanted or Straight:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetSlantedStraight" placeholder="Slanted or Straight (ex. Slanted)" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createCabinetPost}>Add Speaker Cabinet</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.cabinetNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="#9575cd deep-purple lighten-2" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}