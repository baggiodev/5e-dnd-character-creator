export interface Pokedex {
  class:           IClass[];
  classFeature:    PokedexClassFeature[];
  subclassFeature: SubclassFeature[];
}

export interface IClass {
  name:                  Name;
  source:                ClassSourceEnum;
  page:                  number;
  srd:                   boolean;
  hd:                    HD;
  proficiency:           string[];
  startingProficiencies: StartingProficiencies;
  startingEquipment:     StartingEquipment;
  multiclassing:         Multiclassing;
  classFeatures:         Array<ClassFeatureClassFeature | string>;
  subclassTitle:         string;
  subclasses:            ClassSubclass[];
  fluff:                 Fluff[];
}

export interface ClassFeatureClassFeature {
  classFeature:        string;
  gainSubclassFeature: boolean;
}

export interface Fluff {
  name?:   Name;
  type:    string;
  entries: Array<PurpleEntry | string>;
  source:  SubclassSourceEnum;
  page:    number;
}

export interface PurpleEntry {
  type:    string;
  name?:   string;
  entries: Array<FluffyEntry | string>;
  by?:     string;
}

export interface FluffyEntry {
  type:       PurpleType;
  name?:      string;
  entries?:   string[];
  caption?:   string;
  colLabels?: string[];
  colStyles?: string[];
  rows?:      Array<Array<RowClass | string>>;
}

export interface RowClass {
  type: RowType;
  roll: Roll;
}

export interface Roll {
  exact: number;
}

export enum RowType {
  Cell = "cell",
}

export enum PurpleType {
  AbilityDc = "abilityDc",
  Entries = "entries",
  List = "list",
  Options = "options",
  RefSubclassFeature = "refSubclassFeature",
  Table = "table",
}

export enum Name {
  Fighter = "Fighter",
}

export enum SubclassSourceEnum {
  Egw = "EGW",
  Phb = "PHB",
  Scag = "SCAG",
  Tce = "TCE",
  UA2020PsionicOptionsRevisited = "UA2020PsionicOptionsRevisited",
  UAClassFeatureVariants = "UAClassFeatureVariants",
  UAFighter = "UAFighter",
  UAFighterRangerRogue = "UAFighterRangerRogue",
  UAFighterRogueWizard = "UAFighterRogueWizard",
  UAGothicHeroes = "UAGothicHeroes",
  UAKitsOfOld = "UAKitsOfOld",
  UARevisedClassOptions = "UARevisedClassOptions",
  UARevisedSubclasses = "UARevisedSubclasses",
  UAThreeSubclasses = "UAThreeSubclasses",
  Xge = "XGE",
}

export interface HD {
  number: number;
  faces:  number;
}

export interface Multiclassing {
  requirements:        Requirements;
  proficienciesGained: ProficienciesGained;
}

export interface ProficienciesGained {
  armor:   string[];
  weapons: string[];
}

export interface Requirements {
  or: Or[];
}

export interface Or {
  str: number;
  dex: number;
}

export enum ClassSourceEnum {
  Phb = "PHB",
  Tce = "TCE",
  UAClassFeatureVariants = "UAClassFeatureVariants",
}

export interface StartingEquipment {
  additionalFromBackground: boolean;
  default:                  string[];
  goldAlternative:          string;
  defaultData:              DefaultDatum[];
}

export interface DefaultDatum {
  a: Array<AClass | string>;
  b: Array<BClass | string>;
}

export interface AClass {
  equipmentType: string;
}

export interface BClass {
  equipmentType?: string;
  quantity:       number;
  item?:          string;
}

export interface StartingProficiencies {
  armor:   string[];
  weapons: string[];
  skills:  Skill[];
}

export interface Skill {
  choose: Choose;
}

export interface Choose {
  from:  string[];
  count: number;
}

export interface ClassSubclass {
  name:                    string;
  shortName:               string;
  source:                  SubclassSourceEnum;
  page:                    number;
  subclassFeatures:        string[];
  srd?:                    boolean;
  spellcastingAbility?:    string;
  casterProgression?:      string;
  cantripProgression?:     number[];
  spellsKnownProgression?: number[];
  subclassTableGroups?:    SubclassTableGroup[];
  isReprinted?:            boolean;
  additionalSpells?:       AdditionalSpell[];
}

export interface AdditionalSpell {
  innate: Innate;
}

export interface Innate {
  "3": string[];
}

export interface SubclassTableGroup {
  subclasses: SubclassTableGroupSubclass[];
  colLabels:  string[];
  rows:       Array<number[]>;
  title?:     string;
}

export interface SubclassTableGroupSubclass {
  name:   string;
  source: ClassSourceEnum;
}

export interface PokedexClassFeature {
  name:                   string;
  source:                 ClassSourceEnum;
  page:                   number;
  srd?:                   boolean;
  className:              Name;
  classSource:            ClassSourceEnum;
  level:                  number;
  entries:                Array<TentacledEntry | string>;
  isClassFeatureVariant?: boolean;
}

export interface TentacledEntry {
  type:     PurpleType;
  count?:   number;
  entries?: StickyEntry[];
  items?:   string[];
}

export interface StickyEntry {
  type:            FluffyType;
  optionalfeature: string;
}

export enum FluffyType {
  Entries = "entries",
  Options = "options",
  RefOptionalfeature = "refOptionalfeature",
  RefSubclassFeature = "refSubclassFeature",
}

export interface SubclassFeature {
  name:                   string;
  source:                 SubclassSourceEnum;
  page:                   number;
  className:              Name;
  classSource:            ClassSourceEnum;
  subclassShortName:      string;
  subclassSource:         SubclassSourceEnum;
  level:                  number;
  entries:                Array<IndigoEntry | string>;
  header?:                number;
  isClassFeatureVariant?: boolean;
  srd?:                   boolean;
}

export interface IndigoEntry {
  type:             PurpleType;
  subclassFeature?: string;
  items?:           Array<ItemClass | string>;
  entries?:         Array<IndecentEntry | string>;
  count?:           number;
  name?:            string;
  style?:           string;
  caption?:         string;
  colLabels?:       string[];
  colStyles?:       string[];
  rows?:            Array<string[]>;
  attributes?:      string[];
}

export interface IndecentEntry {
  type:             FluffyType;
  name?:            string;
  entries?:         Array<HilariousEntry | string>;
  optionalfeature?: string;
  subclassFeature?: string;
}

export interface HilariousEntry {
  type:             TentacledType;
  name?:            string;
  attributes?:      string[];
  optionalfeature?: string;
  items?:           string[];
}

export enum TentacledType {
  AbilityAttackMod = "abilityAttackMod",
  AbilityDc = "abilityDc",
  List = "list",
  RefOptionalfeature = "refOptionalfeature",
}

export interface ItemClass {
  type:  string;
  name:  string;
  entry: string;
}
