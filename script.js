

const howManyQuestions = () => {
    title.innerHTML = `Je suis, je suis, je suis.... QPUC`;
    insert.innerHTML = ``;
    insert.innerHTML = `
    <h3 class="text-center">Setup your game and let's begin !</h3>
    <div class="form-inline justify-content-center"> 
      <label for="number">Number of question(s)  </label>
      <select id="number" name="level" class="form-control mx-3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected="selected">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <label for="category">of</label>
      <select id="category" name="category" class="form-control mx-3">
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals &amp; Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science &amp; Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
        <option value="32">Entertainment: Cartoon &amp; Animations</option>
      </select>
      <select id="level" name="level" class="form-control">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <p id="launch" class="mx-5 my-5 btn btn-danger btn-lg">Go !</p>  
    </div>
    `;
    document.getElementById("launch").addEventListener("click", () => {
      chosenNumber = document.getElementById("number").value;
      chosenCategory = document.getElementById("category").value;
      chosenLevel = document.getElementById("level").value;
      let URL = `https://opentdb.com/api.php?amount=${chosenNumber}&category=${chosenCategory}&difficulty=${chosenLevel}`;
      getQuizz(URL);
    });
    
  };