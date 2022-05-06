declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  class RDStationForms {
    constructor(apiKey: string, analyticsKey?: string)

    createForm(): void
  }
}
