# Plan - Mobile Optimization and Video Player Management

The user wants to clarify if using the YouTube player requires manual link updates for each video or if there's an automated way to connect/sync them. Based on the current architecture, I will explain the options and implement any requested automation or integration if possible within the framework.

## Proposed Changes

### 1. Analysis and Documentation
- Review `src/components/site/niches.ts` and `src/components/site/youtube.ts` to understand how YouTube videos are currently handled.
- Explain to the user that without a backend service or YouTube Data API integration, the current method is manual (updating `niches.ts`).
- Propose an automated approach using a YouTube Playlist ID if the user prefers, which would allow them to just add videos to a playlist and have the site update automatically.

### 2. Implementation of YouTube Playlist Integration (Optional/Proposed)
- If the user chooses automation, I will create a server function or a client-side fetcher that uses the YouTube Data API (v3) to list videos from a specific playlist.
- This would require a YouTube API Key (to be added via `add_secret`).

### 3. Visual Text Edits (As requested in the user message)
- The user's request includes a text block that seems to be a instruction/context rather than a direct UI change request, but it's formatted as "Change text from 'body' to...".
- I will clarify if the user wants this text *on the page* or if it was just their way of providing context for the YouTube question. 
- *Correction:* The user is likely using the "visual text edit" format to ask a question. I will respond to the question directly.

## Verification Plan

### Automated Checks
- Check build status after any code changes.
- Verify `src/components/site/niches.ts` remains consistent if manual updates are still required.

### Manual Verification
- If a playlist integration is implemented, verify that fetching works and handles empty/error states.
- Confirm the YouTube player behavior on mobile (Safari/Chrome).
