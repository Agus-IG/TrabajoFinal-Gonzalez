let turno = [];

class Clinica{
    constructor(nombre,dueño,responsabilidadJuridica,doctores,enfermeros){
        this.n = nombre;
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
        return "Nombre: "+this.n+"\n"+"Apellido: "+this.a+"\n"+"Especialidad: "+this.e+"\n"+"Matricula: "
    }
}

class Enfermero extends Personal{
    constructor(nombre,apellido,matricula,pacientes,licenciatura){
        super(nombre,apellido,matricula,pacientes)
        this.l = licenciatura;
    }
}

class Paciente{
    constructor(nombre,apellido, dni,fechaNac,turno,obraSocial){
        this.n = nombre;
        this.a = apellido;
        this.d = dni;
        this.fn = fechaNac;
        this.t = turno;
        this.os = obraSocial;
    }

    edad(){

    }

    datosPaciente(){
        return this.n+"-"+this.a+"-"+this.d+"-"+this.fn+"-"+this.t+"-"+this.os
    }
}

let pacientes = []
function ingresarPaciente() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = parseInt(document.getElementById("dni").value)
    let fechaNac = document.getElementById("fechaNac").value
    let turno = document.getElementById("horaTurno").value
    let obraSocial = document.getElementById("obraSocial").value
    let paciente = new Paciente(nombre,apellido, dni,fechaNac,turno,obraSocial)
    pacientes.push(paciente)
}

