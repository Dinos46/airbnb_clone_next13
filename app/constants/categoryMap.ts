import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-Icons/gi";
import { TbBeach, TbMountain, TbPool } from "react-Icons/tb";
import { FaSkiing } from "react-Icons/fa";
import { BsSnow } from "react-Icons/bs";
import { IoDiamond } from "react-Icons/io5";
import { MdOutlineVilla } from "react-Icons/md";
import { IconType } from "react-icons";

export const categoryMap: Record<string, IconType> = {
  TbBeach: TbBeach,
  TbMountain: TbMountain,
  GiWindmill: GiWindmill,
  IoDiamond: IoDiamond,
  GiBarn: GiBarn,
  GiCactus: GiCactus,
  BsSnow: BsSnow,
  GiForestCamp: GiForestCamp,
  GiCaveEntrance: GiCaveEntrance,
  GiCastle: GiCastle,
  FaSkiing: FaSkiing,
  GiBoatFishing: GiBoatFishing,
  GiIsland: GiIsland,
  TbPool: TbPool,
  MdOutlineVilla: MdOutlineVilla,
};
