import type { ContractSection } from "../types";

// Literal text as corrected by the client 2026-08-25 (fixes three inconsistencies
// in the original Google Docs templates): §1 wording unified to "exclusively for
// the agreed event purpose" for both contract types, Lessor email corrected to
// anfrage@shared-horizon.de, and §9/§10 numbering (Special Agreements always
// printed as §9, Final Provisions as §10).
export function getGemeinsamSectionsEn(sonder?: string): ContractSection[] {
  return [
    {
      nummer: "1",
      titel: "Booking and Use",
      body: [
        {
          type: "p",
          text: "The houseboat is made available exclusively for the agreed event purpose.",
        },
        {
          type: "p",
          text: "During navigation, the houseboat shall be operated exclusively by the Lessor or by a suitably qualified skipper appointed by the Lessor. The Renter and the Renter's guests are not permitted to operate the houseboat themselves.",
        },
        {
          type: "p",
          text: "Use without the presence of a skipper appointed by the Lessor is permitted only by express agreement and only while the houseboat remains at its fixed berth.",
        },
        {
          type: "p",
          text: "The permitted number of persons shall at all times be determined by the applicable official, navigation and safety requirements for the houseboat. The agreed or legally permitted number of persons must not be exceeded.",
        },
      ],
    },
    {
      nummer: "3",
      titel: "Operation of the Houseboat and Safety",
      body: [
        {
          type: "p",
          text: "During navigation, the houseboat shall be operated exclusively by the Lessor or by a suitably qualified skipper appointed by the Lessor.",
        },
        {
          type: "p",
          text: "All persons on board must comply with the skipper's safety-related and navigation-related instructions.",
        },
        {
          type: "p",
          text: "The skipper is entitled to modify, interrupt or refrain from planned trips, routes or individual manoeuvres for safety reasons. This applies in particular in unsuitable weather conditions, in the event of technical problems, official requirements or other circumstances affecting safe operation.",
        },
        {
          type: "p",
          text: "The Renter shall inform the Renter's guests of the applicable safety and onboard rules and shall ensure, to the extent reasonably possible, that they comply with them.",
        },
      ],
    },
    {
      nummer: "4",
      titel: "Insurance, Damage and Liability",
      body: [
        {
          type: "p",
          text: "During navigation, the houseboat shall be operated exclusively by the Lessor or by a skipper appointed by the Lessor. The Renter therefore does not require separate boat insurance for the agreed use.",
        },
        {
          type: "p",
          text: "The Renter shall be liable in accordance with applicable law for any damage to the houseboat, its inventory or other property of the Lessor culpably caused by the Renter or the Renter's guests and not resulting from the operation of the houseboat by the Lessor.",
        },
        {
          type: "p",
          text: "Such damage may, where applicable, be settled through an existing personal liability insurance policy of the Renter or the person responsible for the damage. Irrespective of this, the Renter remains liable to the Lessor for damage attributable to the Renter or the Renter's guests.",
        },
        {
          type: "p",
          text: "Any damage, technical malfunction or safety-relevant defect must be reported to the Lessor without undue delay.",
        },
        {
          type: "p",
          text: "Normal wear and tear resulting from use in accordance with this Agreement does not constitute compensable damage.",
        },
        {
          type: "p",
          text: "The Lessor shall have unlimited liability for intent and gross negligence and for culpable injury to life, body or health. In cases of ordinary negligence, the Lessor shall only be liable for breach of a material contractual obligation, limited to the typical and foreseeable damage under this Agreement.",
        },
      ],
    },
    {
      nummer: "5",
      titel: "Use and Onboard Rules",
      body: [
        {
          type: "p",
          text: "The houseboat and its equipment must be treated with care and used only as intended.",
        },
        { type: "p", text: "The following are prohibited in particular:" },
        {
          type: "list",
          items: [
            "Smoking inside the houseboat;",
            "use of illegal drugs;",
            "exceeding the agreed or permitted number of persons;",
            "operating the houseboat independently without express permission;",
            "removing inventory or equipment;",
            "open flames outside facilities expressly intended for this purpose.",
          ],
        },
        {
          type: "p",
          text: "Barbecuing, music, alcohol consumption and other activities are permitted subject to the safety rules communicated on board and the applicable harbour and quiet-hour regulations.",
        },
        {
          type: "subheading",
          nummer: "5.1",
          titel: "Safety Information on Board",
        },
        {
          type: "p",
          text: "The Renter confirms having been informed of the following conditions on board and will inform their guests accordingly:",
        },
        {
          type: "list",
          items: [
            "The staircase between levels is steep and must be used with particular care.",
            "The railings offer no protection against climbing over, and children must be supervised at all times on board.",
            "The on-board water is not drinking water.",
            "It is frequently windy on board, and loose items and waste must be secured so that they cannot enter the water.",
          ],
        },
      ],
    },
    {
      nummer: "6",
      titel: "Cancellation by the Renter",
      body: [
        { type: "p", text: "The following cancellation charges apply:" },
        {
          type: "list",
          items: [
            "more than 30 days before the start of use: €50 administration fee;",
            "15–30 days before the start of use: 50% of the agreed rental price;",
            "7–14 days before the start of use: 75% of the agreed rental price;",
            "less than 7 days before the start of use or no-show: 100% of the agreed rental price.",
          ],
        },
      ],
    },
    {
      nummer: "7",
      titel: "Cancellation or Termination of Use",
      body: [
        {
          type: "p",
          text: "If the agreed use cannot be carried out, or cannot be carried out in full, due to force majeure, official orders, unforeseeable technical problems or other circumstances beyond the Lessor's control, the Lessor may cancel, modify or terminate the use.",
        },
        {
          type: "p",
          text: "Amounts already paid for services definitively not provided by the Lessor will be refunded accordingly.",
        },
        {
          type: "p",
          text: "In the event of serious breaches of safety instructions or onboard rules, in particular where persons or the houseboat are endangered, the permitted number of persons is exceeded, or intentional damage occurs, the Lessor is entitled to terminate the use early.",
        },
        {
          type: "p",
          text: "Any further claims shall be governed by applicable law and the liability provisions of this Agreement.",
        },
      ],
    },
    {
      nummer: "8",
      titel: "End of Use",
      body: [
        {
          type: "p",
          text: "At the end of the agreed period of use, the houseboat must be left tidy and broom-clean.",
        },
        {
          type: "p",
          text: "Any identified damage, loss or exceptional soiling must be reported to the Lessor no later than at the end of the use.",
        },
        {
          type: "p",
          text: "Inspection of the houseboat and settlement and refund of the security deposit shall be governed by Section 2 of this Agreement.",
        },
      ],
    },
    {
      nummer: "9",
      titel: "Special Agreements",
      body: [
        {
          type: "p",
          text:
            sonder && sonder.trim().length > 0
              ? sonder.trim()
              : "No special agreements have been made.",
        },
      ],
    },
    {
      nummer: "10",
      titel: "Final Provisions",
      body: [
        {
          type: "p",
          text: "Special agreements made individually under Section 9 take precedence over the remaining provisions of this Agreement.",
        },
        {
          type: "p",
          text: "Amendments and additions to this Agreement may be agreed in text form, in particular by email or confirmed message.",
        },
        {
          type: "p",
          text: "Should any individual provision of this Agreement be or become invalid, the validity of the remaining provisions shall remain unaffected.",
        },
        {
          type: "p",
          text: "This Agreement shall be governed by the laws of the Federal Republic of Germany.",
        },
      ],
    },
  ];
}
