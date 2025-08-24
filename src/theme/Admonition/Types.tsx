import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import AdmonitionTypeLegacy from "./Type/Legacy";
import AdmonitionTypeNonFGD from "./Type/NonFGD";

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,
    'legacy': AdmonitionTypeLegacy,
    'nonFGD': AdmonitionTypeNonFGD,
}

export default AdmonitionTypes;