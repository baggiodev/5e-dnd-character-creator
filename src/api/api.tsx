import availableClasses from "../classes/availableClasses.json";
import artificer from "../classes/artificer.json";
import barbarian from "../classes/barbarian.json";
import bard from "../classes/bard.json";
import cleric from "../classes/cleric.json";
import druid from "../classes/druid.json";
import fighter from "../classes/fighter.json";
import monk from "../classes/monk.json";
import paladin from "../classes/paladin.json";
import ranger from "../classes/ranger.json";
import rogue from "../classes/rogue.json";
import sorcerer from "../classes/sorcerer.json";
import warlock from "../classes/warlock.json";
import wizard from "../classes/wizard.json";

export const getClasses = async (): Promise<any[]> => {
  const myPromise: Promise<any[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(availableClasses);
    }, 300);
  });

  return myPromise;
};

export const getClass = async (whichClass: string): Promise<any> => {
  switch (whichClass.toUpperCase()) {
    case "ARTIFICER":
      const artificerPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(artificer);
        }, 300);
      });
      return artificerPromise;
    case "BARBARIAN":
      const barbarianPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(barbarian);
        }, 300);
      });
      return barbarianPromise;
    case "BARD":
      const bardPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(bard);
        }, 300);
      });
      return bardPromise;
    case "CLERIC":
      const clericPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(cleric);
        }, 300);
      });
      return clericPromise;
    case "DRUID":
      const druidPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(druid);
        }, 300);
      });
      return druidPromise;
    case "FIGHTER":
      const fighterPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fighter);
        }, 300);
      });
      return fighterPromise;
    case "MONK":
      const monkPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(monk);
        }, 300);
      });
      return monkPromise;
    case "PALADIN":
      const paladinPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(paladin);
        }, 300);
      });
      return paladinPromise;
    case "RANGER":
      const rangerPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ranger);
        }, 300);
      });
      return rangerPromise;
    case "ROGUE":
      const roguePromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(rogue);
        }, 300);
      });
      return roguePromise;
    case "SORCERER":
      const sorcererPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(sorcerer);
        }, 300);
      });
      return sorcererPromise;
    case "WARLOCK":
      const warlockPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(warlock);
        }, 300);
      });
      return warlockPromise;
    case "WIZARD":
      const wizardPromise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(wizard);
        }, 300);
      });
      return wizardPromise;
    default:
        return {};
    }
};
