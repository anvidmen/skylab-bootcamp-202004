function PasapalabraGame() {
  

  this.questionsSource = [[{letter:"a",answer:"abducir",status:0,question:"CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},{letter:"b",answer:"bingo",status:0,question:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},{letter:"c",answer:"churumbel",status:0,question:"CON LA C. Niño, crío, bebé"},{letter:"d",answer:"diarrea",status:0,question:"CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},{letter:"e",answer:"ectoplasma",status:0,question:"CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},{letter:"f",answer:"facil",status:0,question:"CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},{letter:"g",answer:"galaxia",status:0,question:"CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},{letter:"h",answer:"harakiri",status:0,question:"CON LA H. Suicidio ritual japonés por desentrañamiento"},{letter:"i",answer:"iglesia",status:0,question:"CON LA I. Templo cristiano"},{letter:"j",answer:"jabali",status:0,question:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},{letter:"k",answer:"kamikaze",status:0,question:"CON LA K. Persona que se juega la vida realizando una acción temeraria"},{letter:"l",answer:"licantropo",status:0,question:"CON LA L. Hombre lobo"},{letter:"m",answer:"misantropo",status:0,question:"CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},{letter:"n",answer:"necedad",status:0,question:"CON LA N. Demostración de poca inteligencia"},{letter:"ñ",answer:"señal",status:0,question:"CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},{letter:"o",answer:"orco",status:0,question:"CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},{letter:"p",answer:"protoss",status:0,question:"CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},{letter:"q",answer:"queso",status:0,question:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},{letter:"r",answer:"raton",status:0,question:"CON LA R. Roedor"},{letter:"s",answer:"stackoverflow",status:0,question:"CON LA S. Comunidad salvadora de todo desarrollador informático"},{letter:"t",answer:"terminator",status:0,question:"CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},{letter:"u",answer:"unamuno",status:0,question:"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},{letter:"v",answer:"vikingos",status:0,question:"CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},{letter:"w",answer:"sandwich",status:0,question:"CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},{letter:"x",answer:"botox",status:0,question:"CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},{letter:"y",answer:"peyote",status:0,question:"CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},{letter:"z",answer:"zen",status:0,question:"CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}],[{letter:"a",answer:"arma",status:0,question:"CON LA A. Instrumento o máquina que sirve para atacar o defenderse: Apoderarse de alguien"},{letter:"b",answer:"bañarse",status:0,question:"CON LA B. Entrar en el agua para lavarse, para nadar o jugar:"},{letter:"c",answer:"cazadora",status:0,question:"CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura:"},{letter:"d",answer:" debil",status:0,question:"CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia:"},{letter:"e",answer:"edificio",status:0,question:"CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc:"},{letter:"f",answer:" futuro",status:0,question:"CON LA F. Tiempo que viene después:"},{letter:"g",answer:"grua",status:0,question:"CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro"},{letter:"h",answer:"hundir",status:0,question:"CON LA H. Ir abajo dentro del agua"},{letter:"i",answer:"isla",status:0,question:"CON LA I. Territorio que está rodeado de agua por todas partes"},{letter:"j",answer:"jugador",status:0,question:"CON LA J. Persona que juega"},{letter:"k",answer:"kilo",status:0,question:"CON LA K. Medida para pesar (equivale a mil gramos)"},{letter:"l",answer:"lata",status:0,question:"CON LA L. Envase de metal"},{letter:"m",answer:"manzana",status:0,question:"CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura"},{letter:"n",answer:"nunca",status:0,question:"CON LA N. Ningún día o en ningún tiempo"},{letter:"ñ",answer:"señuelo",status:0,question:"CONTIENE LA Ñ. Objeto que se utiliza para atraer a las aves que se quieren cazar"},{letter:"o",answer:"oveja",status:0,question:"CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana"},{letter:"p",answer:"pasear",status:0,question:"CON LA P. Andar por placer o para hacer ejercicio"},{letter:"q",answer:"querer",status:0,question:"CON LA Q. Tener el deseo, la voluntad o la intención de hacer, poseer o lograr algo"},{letter:"r",answer:"resumen",status:0,question:"CON LA R. Pocas palabras que  cuentan una historia más larga"},{letter:"s",answer:"sandalia",status:0,question:"CON LA S. Calzado que no tapa todo el pie"},{letter:"t",answer:"techo",status:0,question:"CON LA T. Parte de una habitación que está arriba"},{letter:"u",answer:"urgente",status:0,question:"CON LA U. Que no puede esperar"},{letter:"v",answer:"veloz",status:0,question:"CON LA V. Que es muy rápido"},{letter:"w",answer:"wisky",status:0,question:"CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales"},{letter:"x",answer:"xilofono",status:0,question:"CON LA X. Instrumento musical de percusión formado por una serie de láminas de madera dispuestas horizontalmente y ordenadas según su tamaño que, al ser golpeadas, emiten sonidos correspondientes a diferentes notas musicales; se toca con dos o cuatro macillas"},{letter:"y",answer:"yegua",status:0,question:"CON LA Y. Hembra del caballo"},{letter:"z",answer:"zarpar",status:0,question:"CON LA Z. Empezar a navegar"}]];
  this.timerInterval = null;
  this.time = 10;
  this.questions = []
  this.position = 0;
  this.secondIteration = false;
  this.lists = document.getElementsByTagName("li");

  //  -------------------------------------------------------------------------------------

  this.element = function(selector) {
      return document.querySelector(selector)
  }


  this.fillQuestions = function() {
      this.questionsSource.forEach(block => {
          block.forEach((question, i) => {
            this.questions[i] = (Math.random() >= 0.5) ? this.questionsSource[0][i] : this.questionsSource[1][i]
          })
        })
  }
  
    
  this.drawCircle = function () {
    this.questions.forEach((q, i) => {
      let rotate = (360 / this.questions.length) * i + (-90);
      this.lists[i].style.transform = `rotate(${rotate}deg) translate(20em) rotate(${rotate * (-1)}deg)`;
    });
  }
    
  
  this.timer = function(){
      this.time -= 1
      this.element('#time').innerText = this.time;
      if(this.time <= 0){
          this.time = 10
          this.next()
      }
  }
    
  this.callTimer = function() {
    this.timerInterval = setInterval(this.timer.bind(this), 1000);
  }
    
    this.replay = function(){
      this.position = 0;
      this.secondIteration = false;
      this.timerInterval = null;
      this.questions.forEach(question => {
        question.status = 0
      })

      this.element('#result').innerText = ''
      this.play()
    }
    
  
    this.printQuestion = function() {
      this.element('#question').innerText = this.questions[this.position].question;
    }
  
    this.markAsSelected = function() {
      this.lists[this.position].classList.add("selected");
    }
  
    this.hideModal = function() {
      this.element('#startGame').classList.add("hide");
    }
  
    this.callNextOnEnter = function() {
      this.element('#userAnswer').addEventListener('keyup',(event) => {
          if (event.keyCode === 13) {
            this.next()
        }
        })
    }
    
   this.startGame = function() {
    this.element('#startGame').addEventListener('click', this.play.bind(this));
   } 
  
   this.handleClearNext = function() {
    this.element('#pasapalabra').addEventListener('click', this.clearNext.bind(this));
   }
    
  
    this.clearNext = function(){
      this.element('#userAnswer').value = ''
      this.next()
    }
    
    this.removeSelected = function() {
      this.lists[this.position].classList.remove("selected");    
    }
  
    this.getUserAnswer = function() {
      return this.element('#userAnswer').value.toLowerCase();
    }
  
    this.clearUserAnswer = function(){
      this.element('#userAnswer').value = '';
    }
  
    this.setStatus = function(status) {
      this.questions[this.position].status = status;
    }
  
    this.markAsCorrect = function() {
      this.lists[this.position].classList.add("correct");
    }
  
    this.markAsWrong = function() {
      this.lists[this.position].classList.add("wrong");
    }
    
    this.validateAnswer = function() {
      let userAnswer = this.getUserAnswer()
  
      if (userAnswer === this.questions[this.position].answer) {
        this.markAsCorrect()
        this.setStatus(1)
      
      } else if (userAnswer !== "" && userAnswer !== "pasapalabra") {
        this.markAsWrong()
        this.setStatus(-1)
        }
    }

    this.filterByStatus = function(status) {
        return this.questions.filter(question => question.status === status);
    }
  
    this.printResults = function() {

      let correct = this.filterByStatus(1);
      let incorrect = this.filterByStatus(-1);
      let saltadas = this.filterByStatus(0);
  
      this.element('#result').innerHTML = `
          <div>
          <p>Acertadas: ${correct.length}</p>
          <p>Incorrectas: ${incorrect.length}</p>
          <p>Pasapalabra: ${saltadas.length}</p>
          <button onclick="pasapalabra.replay()" >Reiniciar!</button>
          </div>
      `;
  
      clearInterval(this.timerInterval);
    }
  
    this.setSecondIteration = function() {
      this.secondIteration = true;
      this.position = 0;
    }
  
    this.isItOver = function() {
     return (this.secondIteration && this.position >= this.questions.length)
    }


    this.play = function() {

      this.callTimer()
      this.printQuestion()
      this.markAsSelected()
      this.hideModal()

    }


  // --------------------------------------------------------------------------------------

  this.init = function() {

      this.fillQuestions()
      this.drawCircle()
      this.callNextOnEnter()
      this.startGame()
      this.handleClearNext()

  }

  this.next = function() {

      this.time = 10;
      
      if (this.isItOver()) return console.log("Game over");
  
      this.removeSelected()
      
      this.validateAnswer()
  
      this.position++;
  
      this.clearUserAnswer()
  
      if (this.isItOver()) return this.printResults()
      
      const isRoundComplete =  this.position >= this.questions.length;
      if (isRoundComplete) this.setSecondIteration()
      
      const isItAnswered = this.questions[this.position].status !== 0;
      if (isItAnswered) return this.next();
    
      clearInterval(this.timerInterval);
    
      this.play();
    }

  // --------------------------------------------------------------------------------------

}

const pasapalabra = new PasapalabraGame()
pasapalabra.init()