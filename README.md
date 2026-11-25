# Lab 10 : Configuration de la Bottom Tab Navigation dans une application React Native

## Objectif

L'objectif de ce TP est de remplacer la Stack Navigation par une Bottom Tab Navigation dans une application React Native, afin de permettre la navigation entre deux écrans : Login et Welcome.

## Travail réalisé

Installation de la bibliothèque @react-navigation/bottom-tabs.

Création du Tab Navigator avec createBottomTabNavigator().

Configuration de NavigationContainer.

Définition des deux routes Login et Welcome.

Configuration de Login comme écran initial.

Masquage du Header par défaut avec headerShown: false.

## Résultat final

## 1. Écran Login

L'application affiche initialement l'écran Login, contenant deux champs de saisie : Email et Password.

<img width="1080" height="2400" alt="WhatsApp Image 2026-11-25 at 13 20 10" src="https://github.com/user-attachments/assets/9146ae82-6651-45a4-a8fc-260cebce3b5e" />


## 2. Écran Welcome

En cliquant sur l'onglet Welcome, l'application affiche un écran de bienvenue avec un texte descriptif et un champ First Name.

<img width="1080" height="2400" alt="WhatsApp Image 2026-11-25 at 13 20 08" src="https://github.com/user-attachments/assets/0a360881-6f29-42f3-8627-2b7a9bcdf010" />


## Conclusion

Ce TP nous a permis de mettre en place une Bottom Tab Navigation avec React Navigation et de faciliter le passage entre les écrans Login et Welcome en modifiant uniquement le fichier App.js.
