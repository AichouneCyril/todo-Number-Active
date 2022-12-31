# todo-Number-Active
Test technique avec l'entreprise Active SAS de Strasbourg
Todo-Number
Cette application est une todo-list simple qui vous permet de gérer une liste de nombres.

Objectif
L'objectif de cette application est de vous permettre d'ajouter, de supprimer et de visualiser une liste de nombres en utilisant une API backend.

Dépendances
Pour utiliser cette application, vous aurez besoin de:

Coté Frontend :
React
UUID
Axios
bootstrap
Coté backend :
dotenv
cors
express
mysql2
nodemon
Coté test : (optionnel, non utilisé dans cette application)
cypress
Méthodes
Pour ajouter un nombre à votre liste, entrez le nombre dans le champ de saisie et cliquez sur "Envoyer". Le nombre sera alors envoyé à l'API via la méthode postNumber dans api.js.

Pour supprimer un nombre de votre liste, cliquez sur le bouton "Supprimer" à côté du nombre souhaité. Cela déclenchera la méthode deleteNumber dans api.js, qui supprimera le nombre de la base de données.

Vous pouvez également afficher la liste complète de nombres en utilisant la méthode getNumbers dans api.js. Cette méthode récupère les nombres stockés dans la base de données et les affiche dans la liste.

Conclusion
Cette application simple vous permet de gérer une liste de nombres en utilisant une API backend. Elle utilise les dépendances React, UUID, Axios et bootstrap côté frontend, ainsi que dotenv, cors, express, mysql2 et nodemon côté backend. Les méthodes postNumber, deleteNumber et getNumbers sont utilisées pour ajouter, supprimer et afficher les nombres dans la liste.
