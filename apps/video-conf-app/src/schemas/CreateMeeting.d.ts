interface CreateMeetingsResponseInterface {
  Meeting: {
    MeetingId: string;
    ExternalMeetingId: any;
    MediaPlacement: {
      AudioHostUrl: string;
      AudioFallbackUrl: string;
      ScreenDataUrl: string;
      ScreenSharingUrl: string;
      ScreenViewingUrl: string;
      SignalingUrl: string;
      TurnControlUrl: string;
    };
    MediaRegion: string;
  };
  Attendee: {
    ExternalUserId: string;
    AttendeeId: string;
    JoinToken: string;
  };
}
