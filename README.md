# Coaching App

A cross-platform coaching platform for strength and powerlifting coaches that centralizes workout tracking, video review, athlete management, and performance analysis.

## Problem

Many coaches currently manage athletes through a combination of text messages, video submissions, and spreadsheets. Athletes send lift videos via text while coaches manually track exercise data such as exercise name, sets, reps, weight, and RPE. This workflow is time-consuming, difficult to scale, and lacks centralized performance tracking.

## Solution

Coaching App aims to provide a single platform where athletes can log workouts, upload videos, and track training history while coaches can review performance, provide feedback, and monitor progress from one dashboard.

## MVP Features

### Athlete Experience

* Log exercises, sets, reps, weight, and RPE
* Upload lift videos from mobile or web
* View workout history
* Receive coach feedback
* Track progress over time

### Coach Experience

* Manage multiple athletes
* Review workout submissions
* Watch lift videos
* Leave feedback and coaching notes
* Monitor athlete progress
* View training history and trends

### Tech Stack

* Expo + React Native
* TypeScript
* Supabase Auth
* Supabase PostgreSQL
* Supabase Storage
* GitHub

## Development Status

## 🚧 Early-stage development

### Current focus:

* Supabase integration
* User authentication
* Role-based routing (Coach vs Client)
* Database architecture
* MVP development

### Long-Term Vision

Build the operating system for strength coaches by replacing fragmented workflows with a unified platform for athlete management, communication, workout tracking, video review, and performance analytics.

### Planned Architecture

#### Roles

* Coach
* Client

### Core Entities

* Profiles
* Coach-Client Relationships
* Workout Sessions
* Exercise Entries
* Set Entries
* Videos
* Comments

### Future Features

* Program builder
* Training block management
* Progress analytics
* Estimated 1RM tracking
* Team coaching support
* Athlete messaging
* Stripe subscription billing
* AI-powered performance insights
