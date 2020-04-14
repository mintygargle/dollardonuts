// Button
import Button from "./Buttons/button";

// BAckgrounds
import Background from "./background";

// Text
import { P, H1, H2, H3, List, HR } from "./Text/text-index";

// Burger
import { Burger, StyledBurger, AltStyledBurger } from "./Burger/burger-index";

// Cards
import { MenuItemCard, JobCard, MenuPreviewCard } from "./Cards/card-index";

// Menus
import { Menu, StyledMenu } from "./B_Menu/menu-index";

// Sections
import {
  Hero,
  MenuPreview,
  NowHiring,
  ShopInfo
} from "./sections/section-index";

// Form elements
import {
  Dropdown,
  FileUploader,
  Form,
  InputGroup,
  Label,
  ReqSign,
  Textarea,
  Textbox,
  ContactForm,
  JobForm
} from "./Forms/form-index";

// Navs
import { MainNav, FooterNav, SectionNav } from "./Nav/nav-index";

// General
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

// Utils
import openPanel from "../util/openPanel";
import { useOnClickOutside } from "../util/useOnClickOutside";

// Exports
export {
  AltStyledBurger,
  Background,
  Burger,
  Button,
  ContactForm,
  Dropdown,
  FileUploader,
  FooterNav,
  Form,
  H1,
  H2,
  H3,
  Hero,
  HR,
  InputGroup,
  JobCard,
  JobForm,
  Label,
  List,
  MainNav,
  Menu,
  MenuItemCard,
  MenuPreview,
  MenuPreviewCard,
  NavLink,
  NowHiring,
  openPanel,
  P,
  React,
  ReqSign,
  SectionNav,
  ShopInfo,
  styled,
  StyledBurger,
  StyledMenu,
  Textarea,
  Textbox,
  useOnClickOutside
};
