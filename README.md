# React Chart.js playground

## Installation

Run `npm i` `npm start` and you're good to go.

## Introduction

This is a proposal on how to go about implementing [Chart.js](https://www.chartjs.org/docs/latest/) in a React application.

This solution relies on a wrapper for Chart.js that allows for importing charts as React components so that we dont have to create thos ourselves ([react-chartjs-2](https://react-chartjs-2.js.org/)).

## Project goal

The main goal is to reduce complexity when it comes to building the initial data object when wanting to render a chart.

Chart.js is offers a lot of flexibility and customisable options so the idea is to have a controller (`<ChartController />`) that handles all of this logic for us. IMO this approach will give us the following benefits:

- Faster development and chart implementation
- Anyone new / junior coming into the project will be able to render charts without needing to know the library (not ideal but might be helpful in some cases)
- More readable and intuitive data object model

## Logic flow

The idea is to have a clear separation of two concerns: handling logic and rendering.

The controller receives the initial data object, parses that data and decides what chart component it should render. Then the component gets the data from the controller and renders the chart, simple.

This is a very custom approach and I've done what it makes sense to ME but of course this solution is open for debate and/or suggestions.

## Data Object

Since Chart.js is so flexible and offers so many customisable options, I opted for reducing complexity but, atthe same time, tried to follow Chart.js data model convention as much as possible. Below there's an example of a the data object I'm proposing:

```
{
    type: 'bar' | 'line' | 'pie' | ... (to be extended),
    labels: string[],
    datasets: {
        label?: string,
        data: number[],
        ... more optional
    }[],
    options?: {
        title?: string, //to be extended
        legendPosition?: 'top' | 'right' | 'bottom' | 'left' // if no provided legend won't display,
        ... more optional
    }
}
```

If optional keys are not provided, the util function in charge of parsing the data inside the controller would handle all of the logic so we don't have to worry about it.
