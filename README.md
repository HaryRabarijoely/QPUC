Projets : Je suis, je suis, je suis… Question pour un champion
  
Je suis, je suis, je suis… Question pour un champion
1. Introduction
Cette semaine, tu as pu voir que les API, c'est vraiment sympa ! Tu as eu une légère introduction aux animations grâce à AnimeJS, il est désormais temps de s'exercer encore un peu sur les appels API et la gestion du DOM afin de produire un mini-jeu.

Ton objectif aujourd'hui sera de faire un questionnaire de culture générale ! Tu pourras ensuite y jouer et comparer ton score avec les autres moussaillons !

2. Premier objectif
2.1. Les bases
Connais-tu Open Trivia Database ? C'est une API gratuite te permettant de gérer des quizz de culture générale ! Grâce au panneau de configuration, tu peux générer une API contenant X questions aléatoires ! Lorsque tu cliques sur "Generate API Url", un nouveau lien t'est donné. Tu n'as plus qu'à le fetch en GET, et tu auras les questions de ton quizz ! On remarquera d'ailleurs que le nombre de questions dépend du paramètre "amount", il est donc simple de générer soi-même son propre lien.

Les utilisateurs arriveront sur une page d'accueil avec un input (idéalement un select) leur demandant combien de questions ils souhaitent faire. Après avoir cliqué sur un bouton "Start", cette mini-interface de configuration disparait et laisse place à la première question. L'utilisateur peut ensuite répondre à la question en cliquant sur un des CTA proposés. Une fois répondue, la carte s'en va et laisse place à la question suivante.

Une fois que toutes les questions ont été répondues, l'utilisateur va voir son score apparaître avec les réponses en dessous.

2.2. La touche "artistique" supplémentaire
Lorsque l'utilisateur répond à une question, la boite qui contient la question s'en va vers la gauche, un peu comme un slider, et la question suivante arrive depuis la droite. Cette animation sera faite grâce à AnimeJS. Voici quelques maquettes pour te guider. Tu ne dois pas les suivre à la lettre, mais le concept doit-être le même.







Attention ! Tu ne dois JAMAIS changer de page. Tout est une question de faire apparaître ou disparaitre des éléments.

Si tu es arrivé jusque là alors félicitations, tu as réussi ce que l'on attendait de toi. Mais maintenant s'il te reste du temps, il va falloir aller plus loin !

3. Objectif final
Une fois que l'on a fini son quizz et consulté les résultats, il doit être proposé à l'utilisateur d'entrer un pseudo pour sauvegarder son score. Une fois le pseudo renseigné, vous devez enregistrer son score dans le localStorage. Ensuite, une page des scores doit s'afficher, indiquant le pseudo puis le score des 5 meilleurs joueurs !

Bien sûr, prends en compte qu'il faut afficher le meilleur score pour le MÊME nombre de questions posées.

À toi de voir comment tu souhaites utiliser ton localStorage, tu peux stocker un gros tableau contenant tous les scores à un seul endroit, ou faire un index par nombre de questions répondues, etc.

4. Rendu attendu
Le rendu attendu est une application jouable. L'utilisateur pourra sélectionner le nombre de questions à répondre, puis commencer le jeu, répondre aux questions une par une, puis enfin voir son score et un récapitulatif du quizz : les questions, les bonnes réponses ainsi que, s'il a mal répondu, sa réponse initiale.

Les animations de transition entre les questions doivent être faites en AnimeJS. Ton site doit être hébergé sur Github Pages.