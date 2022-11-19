class Clinica{
    constructor(nombre,dueño,responsabilidadJuridica,doctores,enfermeros){
        this.nombreC = nombre;
        this.dueño = dueño;
        this.responsabilidadJuridica = responsabilidadJuridica;
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

class Personal{
    constructor(nombre,apellido,matricula,pacientes){
        this.n = nombre;
        this.a = apellido;
        this.m = matricula;
        this.p = pacientes;
    }
}

class Doctor extends Personal{
    constructor(nombre,apellido,especialidad,matricula,pacientes){
        super(nombre,apellido,matricula,pacientes)
        this.e = especialidad;
    }   
    
    mostrarTurno(){
        
    }

    mostrarDoctor(){
        return `Nombre: ${this.n} ||
        Apellido: ${this.a} ||
        Especialidad: ${this.e} ||
        Matricula: ${this.m} ||`
    }
}

let doctores = []

let doctor1 = new Doctor('Javier','Parra','Cirugia',455465,'Carrera')
let doctor2 = new Doctor('Alejandro','Arriagada','Traumatismo',767668,'Gonzalez')

doctores.push(doctor1,doctor2)

function mostrarPersonal(){
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = "Doctores:"
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.mostrarDoctor()
            ul.appendChild(li)
        }
    }else{
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.mostrarDoctor()
            ul.appendChild(li)
        }
    }

    let ul2 = document.getElementById("ul2")
    if(ul2.value !== ""){
        ul2.innerHTML = "Enfermeros:"
        for (const item of enfermeros) {
            let li = document.createElement("li")
            li.textContent = item.mostrarEnfermero()
            ul2.appendChild(li)
        }
    }else{
        for (const item of enfermeros) {
            let li = document.createElement("li")
            li.textContent = item.mostrarEnfermero()
            ul2.appendChild(li)
        }
    }

}

class Enfermero extends Personal{
    constructor(nombre,apellido,matricula,pacientes,licenciatura){
        super(nombre,apellido,matricula,pacientes)
        this.l = licenciatura;
    }

    mostrarEnfermero(){
        return `Nombre: ${this.n} ||
        Apellido: ${this.a} ||
        Licenciatura: ${this.l} ||
        Matricula: ${this.m} ||`
    }
}

let enfermeros = []
let enfermero1 = new Enfermero('Bruno','Ruiz',547648,'Geriatrica')

enfermeros.push(enfermero1)


class Paciente{
    constructor(nombre,apellido,dni,fechaNac,doctor,obraSocial){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNac = fechaNac;
        this.doc = doctor;
        this.obraSocial = obraSocial;
    }

    edad(){
        let fechaActual = new Date()
        let fechaNacimiento = new Date(this.fechaNac)
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth()
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
        ) {
            edad--
        }
        return edad
    }

    datosPaciente(){
        return `Nombre: ${this.nombre} ||
        Apellido: ${this.apellido} ||
        DNI: ${this.dni} ||
        Edad: ${this.edad()} ||
        Fecha de nacimiento: ${this.fechaNac} ||
        Doctor/Enfermero: ${this.doc} ||
        Obra social: ${this.obraSocial}`
    }
}

let pacientes = []
function ingresarPaciente() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = parseInt(document.getElementById("dni").value)
    let fechaNac = document.getElementById("fechaNac").value
    let doctorEnfermero = document.getElementById("doctorEnfermero").value
    let obraSocial = document.getElementById("obraSocial").value
    let paciente = new Paciente(nombre,apellido,dni,fechaNac,doctorEnfermero,obraSocial)
    pacientes.push(paciente)
}

function mostrarPacientes(){
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = "Pacientes"
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }else{
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }
}