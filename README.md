# TrelloTaskBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.


Welcome to the Angular Taskboard project! This is a simple task management application built with Angular that features boards, columns, and tasks. It also includes a shared service to facilitate communication between components.

## Project Overview

The Angular Taskboard application allows users to manage tasks in an organized manner using boards, columns, and tasks. The primary components of the application are:

    Boards: Containers that hold multiple columns.
    Board: Sections within a board that contain tasks.
    Tasks: Individual items within a column.
    Home: HomePage

## Features

    Create, edit, and delete boards.
    Add, edit, and remove columns within boards.
    Create, update, and delete tasks within columns.
    Drag and drop tasks between columns and boards.
    Shared service for managing data and communication between components.

## Technologies Used

    Angular (13)
    TypeScript
    HTML/CSS

## Setup Instructions

To get started with the Angular Taskboard application, follow these steps:

    Clone the Repository
    
    git clone https://github.com/sabra123/trello-taskBoard.git

## Navigate to the Project Directory

    cd trello-taskBoard

## Install Dependencies

    npm install

## Run the Application

    ng serve

    Open your browser and go to http://localhost:4200 to view the application.

## Folder Structure

Here's a brief overview of the folder structure:

    src/app/
        boards/ - Contains components and services related to boards.
        board/ - Contains components and services related to columns.
        tasks/ - Contains components and services related to tasks.
        shared/ - Contains the shared service and utility shared components and models.
        app.component.ts - The root component.
        app.module.ts - The main module of the application.
        app-routing.module.ts - Routing configuration.


## Shared Service

The shared service is used for managing the data and facilitating communication between different components. This service is responsible for:

    Managing the state of boards, columns, and tasks.
    Providing methods for adding, updating, and deleting boards, columns, and tasks.
    Emitting events to notify components of data changes.

You can find the shared service in src/app/shared/service/shared.service.ts.
Usage

    This service is a shared service that is being used by all components .
    Boards Component use this to create,update and delete the boards.
    Board Component use this to add columns,update columns and edit columns.
    Task Component use this for managing task ,updating,deleting and creating task.
    This service is used to save data to local storage and get data from local storage.

## Shared Model and Component

    This contains models and common components that are being used by every other components 
    Shared Component contains : Customised Inline-Form and TopBar 
    Shared Model Contains : Model for Board ,Column and Tasks

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


