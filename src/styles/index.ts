import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1280px;
      min-height: 640px; */
  /* background-color: whitesmoke;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center; */

  main {
    /* display: flex;
    flex-direction: column;
    border: 1px solid #d3d3d3;
    width: 960px;
    position: relative; */
    width: 960px;
    min-width: 400px;
    background-color: white;
    margin-bottom: 50px;
  }

  @media (min-width: 600px) {
    .main {
      background-color: purple;
    }
  }

  @media (min-width: 768px) {
    .main {
      background-color: gray;
    }
  }

  @media (min-width: 992px) {
    .main {
      background-color: blue;
    }
  }

  @media (min-width: 1200px) {
    .main {
      background-color: whitesmoke;
    }
  }

  .box-shadow {
    box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%),
      0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
  }

  .box-shadow-2 {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
  }

  .column {
    flex-direction: column;
  }

  .display-flex {
    display: flex;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-3 {
    flex: 3;
  }
  .align-items-center {
    justify-content: center;
  }
  .flex-direction-column {
    flex-direction: column;
  }

  .flex-direction-row {
    flex-direction: row;
  }

  .p {
    justify-content: space-between;
  }

  .justify-content-space-between {
    justify-content: space-between !important;
  }

  .justify-content-space {
    display: flex;
  }

  .red {
    background: red;
  }
  .green {
    background: green;
  }
  .w {
    align-items: flex-start;
    border: 1px solid green;
    background-color: green;
    align-self: flex-start;
    align-content: flex-start;
  }

  .border-gray {
    border: 1px solid #d3d3d3d3;
  }

  .border-top-gray {
    border-top: 1px solid #d3d3d3d3;
  }

  .border-bottom-gray {
    border-bottom: 1px solid #d3d3d3d3;
  }

  hr {
    border: 1px solid #d3d3d3d3;
  }

  .bg {
    background: whitesmoke;
    padding: 10px;

    span {
      color: gray;
      font-weight: bold;
    }
  }
  .a {
    /* align-self: flex-start;
    align-items: baseline; */
  }

  .show-component {
    img {
      width: 40px;
      height: 40px;
    }
  }
  .circle-orange {
    background: orange;
    border: 1px solid gray;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .circle-gray {
    background: gray;
    border: 1px solid gray;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .circle-green {
    background: green;
    border: 1px solid gray;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .align-items-flex-end {
    align-items: flex-end;
  }
  .align-items-center {
    align-items: center;
  }

  .align-items-flex-start {
    align-items: flex-start;
  }

  .justify-content-center {
    justify-content: center;
  }

  .pt-0-5 {
    padding: 5px;
  }

  .p-l {
    padding-left: 5px;
  }
  .padding-title {
    padding: 10px 0px;
  }

  .p-1 {
    padding: 10px;
  }
  .mt-1 {
    margin-top: 20px;
  }

  .mr-1 {
    margin-right: 10px;
  }
  .mb-1 {
    margin-bottom: 10px;
  }

  .mt-2 {
    margin: 20px;
  }
  .mt-3 {
    margin: 30px;
  }
  .mt-4 {
    margin: 40px;
  }
  .mt-5 {
    margin: 50px;
  }

  .padding-left {
    padding-right: 60px;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mt-20 {
    margin-top: 20px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }

  .font-size-0-7em {
    font-size: 0.7em;
  }

  .m-10px {
    margin: 10px;
  }

  .btn-between-margin {
    margin-left: 5px;
  }
  .btn-small-grey {
    border: 1px solid gray;
    background: white;
    color: grey;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9em;
    padding: 3px;
    font-family: sans-serif;

    &:focus {
      outline: red;
    }
  }

  .btn-arrow {
    background: whitesmoke;
    padding: 30px;
    cursor: pointer;

    i {
      font-size: 1.5em;
      color: #d3d3d3d3;
    }

    &:hover {
      background: wheat;
    }
  }

  .bor {
    border: 1px solid black;
  }

  .text-center {
    text-align: center;
  }

  .text-gray {
    color: gray;
  }

  .text-silver {
    color: silver;
  }
  .text-orange {
    color: #ffae00;
  }
  .bold {
    font-weight: bold;
  }

  .justify-content__space-between {
    display: flex;
    justify-content: space-between;
  }

  .btn-green {
    background: green;
    color: white;
  }

  .btn-blue {
    background: #007bff;
    color: white;
  }

  .text-white {
    color: white;
  }

  .btn {
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
