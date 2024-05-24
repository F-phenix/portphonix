# F-Phenix Portfolio

Bienvenue sur le portfolio officiel de F-Phenix, un groupe d'étudiants passionnés par le développement web. Ce projet présente nos compétences, projets et réalisations.

## Structure du Projet

Le projet est organisé comme suit :

```bash
portphonix/
│
├── index.html
├── assets/
│ ├── css/
│ │ └── styles.css
│ ├── js/
│ │ └── script.js
│ ├── images/
│ │ └── logo.png
│ └── fonts/
│ └── custom-font.ttf
├── components/
│ ├── header.html
│ ├── footer.html
│ └── ...
├── pages/
│ ├── about.html
│ ├── contact.html
│ └── ...
└── README.md
```

### Détails du structure

- **index.html** : La page principale du portfolio.
- **assets/** : Contient les ressources statiques telles que les fichiers CSS, JavaScript, images et polices.
  - **css/styles.css** : Feuille de style principale du projet.
  - **js/script.js** : Script principal du projet.
  - **images/** : Dossier pour les images utilisées dans le projet.
  - **fonts/** : Dossier pour les polices personnalisées.
- **components/** : Composants HTML réutilisables comme l'en-tête et le pied de page.
- **pages/** : Pages supplémentaires comme "À propos" et "Contact".
- **README.md** : Documentation du projet.

## Design

La création du design de l'application n'a pas été conçu par nous mais une maquette qu'on a trouvé sur [Behance](https://www.behance.net/)

- **Newman Ezeibeli** - *UI/UX Designer | WordPress Developer | Graphics Designer* - [Profil behance](https://www.behance.net/Mehvish_Iql)
- **Baaraku Website** - [Maquette de l'application](https://www.behance.net/gallery/164318969/Baaraku-Recruiting-Company-Website?fbclid=IwZXh0bgNhZW0CMTAAAR0swpwXuyrn-epi06HEpCR9is1gh4UHfy7mCiIKhJto2BRczI3GMDithvk_aem_AfZ22u9v5iqUBM6O2BYH7ty0PFDQ3nzC7yhKQodVGdrLgn6zjn4AZi17bI7O_iNcHv0VNRuFDHqy3P_B_FoQuPLo)

Vous pouvez télecharger ici les images :

- **Assets** - [Google Drive](https://drive.google.com/drive/folders/1ovsdnJ7aZ64DsoH7DNMIJtd5UXnZtWjw?usp=sharing)

## Installation

Pour cloner et exécuter ce projet, vous aurez besoin de [Git](https://git-scm.com) et d'un navigateur web. Depuis votre ligne de commande :

```bash
# Clonez ce dépôt
git clone https://github.com/F-phenix/portphonix.git

# Allez dans le répertoire du projet
cd portphonix

# Ouvrez le fichier index.html dans votre navigateur
```

## Test local (Docker)

  - Prérequis:
    - [Docker engine](https://docs.docker.com/engine/install/)
    - [Docker compose](https://docs.docker.com/compose/install/linux/)

  Pour lancer le conteneur,

  ```bash
    $ ~ cd local && bash start.sh
  ```

  Pour arrêter le conteneur,
  ```bash
    $ ~ cd local && bash stop.sh
  ```