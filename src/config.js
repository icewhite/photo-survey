const config = {
  job: {
    details: [
      {
        title: "Site information",
        fields: [
          { label: "Windfarm name and address" },
          { label: "Turbine model and manufacturer}" },
          { label: "Number of turbines" },
          { label: "Nominal output (Turbine MW)" },
          { label: "Voltages HV/LV" },
          { label: "Converter manufacturer/type" },
          { label: "Frequency" },
          { label: "Rotor diameter" },
          { label: "Site commissioning date" }
        ]
      },
      {
        title: "Inspection details",
        fields: [
          { label: "Turbine number" },
          { label: "Inspector (Name)" },
          { label: "Date of inspection (DD/MM/YYYY)" },
          { label: "Turbine status (Online/Offline)" },
          { label: "Production hours" },
          { label: "Work Order number" },
          {
            label: "Additional comments",
            multiline: true,
            helperText: "You can enter multiple lines here"
          }
        ]
      }
    ],
    checklist: [
      {
        title: "Turbine External",
        steps: [
          {
            desc:
              "Hardstanding area – any evidence of debris, damage, oil or grease leaks"
          },
          {
            desc:
              "Turbine concrete base condition (External) - Check for cracking, spalling and damage to upstand and grouted areas"
          },
          {
            desc:
              "Turbine concrete base condition (External) - Check for cracking, spalling and damage to upstand and grouted areas"
          }
        ]
      },
      {
        title: "Internal Tower Base",
        steps: [
          {
            desc:
              "Tower internal structure and surface finish should be in good condition and free from grease, oil, mould, dirt or corrosion"
          },
          {
            desc:
              "Check for evidence of oil leaks, general cleanliness and housekeeping"
          },
          {
            desc:
              "Tower internal joints and sealant (foundation) should be inspected for cracks, water ingress and corrosion."
          }
        ]
      }
    ]
  }
};

export default config;
