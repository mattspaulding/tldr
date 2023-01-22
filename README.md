# TLDR

Recration of TLDR homepage

## Production

The application is deployed on vercel check it out

[https://tldr-eosin.vercel.app](https://tldr-eosin.vercel.app)

## Introduction

This application accepts a validated email address, POSTs it to the API which prints the email in terminal, and then redirects to a success page.

### Tech

- Next.js v13.1.4
- React v18.2.0
- Typescript v4.9.4
- Tailwind v3.2.4

### Design

I copied the home page mostly with some notable chages

#### Color

The original black and white is a bit jarring to look at so I went with a slate palette. The muted text is easier on the eyes. The important sections of the page are bright to make them stand out. i.e. the title and CTA are brighter than the body.

#### Spacing

I used some spacing design principals to spread the page a bit.

#### Icons

I changed the icons to a bounce animation. I thought this gives them more energy and personality. Each icon has its own rythym which gives them individuality.

#### Email Input

I added a focus state to the input to make it more clear to the user. Also changed the design of the default state because I thought it looked cooler. This uses standard HTML email validation. Further validation should happen on the server but out of scope for this assignment.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
