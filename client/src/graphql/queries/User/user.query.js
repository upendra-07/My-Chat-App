import React from "react";
import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      userName
      email
      phone
    }
  }
`;
