import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (

<Contact>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </motion.button>
        </Contact>
